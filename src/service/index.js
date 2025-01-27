import interceptor from "../interceptor";

export const getBillApi = () => {
  return interceptor.get("getbill").then((resp) => {
    return resp.data;
  });
};
