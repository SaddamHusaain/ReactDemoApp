import Axios from "axios";
import { ErrorToast } from "../components/toaster/Toaster";

const API = Axios.create({
  baseURL: "",
});
API.interceptors.request.use(
  (conf: any) => {
    // you can add some information before send it.
    return conf;
  },
  (error) => {
    return Promise.reject(error);
  },
);
API.interceptors.response.use(
  (next) => {
    return Promise.resolve(next.data);
  },
  (error) => {
    // You can handle error here and trigger warning message without get in the code inside
    //   store.dispatch({
    //     type: env.actionsTypes.openModal,
    //     message: error.message,
    //   });
    ErrorToast(JSON.parse(error.request.response).message);
    return Promise.reject(JSON.parse(error.request.response));
  },
);
export default API;
