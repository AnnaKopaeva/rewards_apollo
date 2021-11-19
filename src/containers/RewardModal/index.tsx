import * as React from "react";
import { Formik, Field, FormikProps } from "formik";
import { useSelector } from "react-redux";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import Modal from "../../components/Modal";
import Autocomplete, { FormFieldProps } from "../../components/Autocomplete";

import { RewardSchema } from "./validation";
import { selectUsersData } from "../../store/users/selectors";
import { RewardEntity } from "../../interfaces/RewardEntity";
import useRewardModal from "./useRewardModal";
import { useCreateReward } from "../../apollo/actions";

import styles from "./RewardModal.styles";

interface RewardModalProps {
  open: boolean;
  onClose(): void;
}

const RewardModal: React.FC<RewardModalProps> = ({ open, onClose }) => {
  const users = useSelector(selectUsersData);

  const { initialReward } = useRewardModal();
  const [createReward] = useCreateReward();

  const handleFormSubmit = async (data: RewardEntity) => {
    await createReward({ variables: data });
    onClose();
  };

  return (
    <Modal isOpen={open} onClose={onClose}>
      <Formik
        initialValues={initialReward}
        validationSchema={RewardSchema}
        onSubmit={handleFormSubmit}
      >
        {({ values, touched, errors, handleChange, handleSubmit }: FormikProps<RewardEntity>) => (
          <form onSubmit={handleSubmit}>
            <Box sx={styles.form}>
              <Field
                name="user"
                component={(props: FormFieldProps) => (
                  <Autocomplete
                    {...props}
                    options={users}
                    textFieldProps={{
                      label: "To",
                      placeholder: "Select User",
                      helperText: touched.user && errors.user,
                      error: Boolean(touched.user && errors.user),
                    }}
                  />
                )}
              />
              <TextField
                name="rewardCount"
                type="number"
                label="Reward"
                InputProps={{ placeholder: "Enter rewards" }}
                fullWidth
                margin="normal"
                value={values.rewardCount}
                InputLabelProps={{ shrink: true }}
                helperText={touched.rewardCount && errors.rewardCount}
                error={Boolean(touched.rewardCount && errors.rewardCount)}
                onChange={handleChange}
              />
              <TextField
                name="message"
                multiline
                rows={4}
                label="Why?"
                fullWidth
                margin="normal"
                value={values.message}
                InputLabelProps={{ shrink: true }}
                onChange={handleChange}
              />
              <Button color="primary" type="submit" variant="contained" sx={styles.btn}>
                Reward
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Modal>
  );
};

export default RewardModal;
