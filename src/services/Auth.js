import request from "../configAPI/api";

const loginservice = (data) => {
  return request({
    url: `/login`,
    method: "POST",
    data: data,
  });
};
const getListProjectService = () => {
  return request({
    url: `/project/getall?pageSize=8&pageIndex=1`,
    method: "GET",
  });
};
export { loginservice, getListProjectService };
