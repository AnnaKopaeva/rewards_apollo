import Axios, { Method } from "axios";
import { ErrorEntity } from "../interfaces/ErrorEntity";

interface ApiProps<T = any> {
  url?: string;
  method?: Method;
  data?: T;
}

/**
 * call to api
 * @async
 * @method
 * @param {String} url - API url
 * @param {Method} method - API methods
 * @param {any} data - data
 * @returns result of call to API
 * @throws { ErrorEntity } When API return error.
 */
const callAPI = async ({ url, method, data }: ApiProps) => {
  const result = await Axios({
    url,
    method,
    data,
  });
  return result;
};

export default callAPI;
