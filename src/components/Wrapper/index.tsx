import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../Layout";

import { fetchUser } from "../../store/users/actions";
import { selectProfileLoaded } from "../../store/profile/selectors";

const Wrapper: React.FC = ({ children }) => {
  const dispatch = useDispatch();

  const isLoaded = useSelector(selectProfileLoaded);

  React.useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return <Layout loading={!isLoaded}>{children}</Layout>;
};

export default Wrapper;
