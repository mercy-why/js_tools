import axios from "axios";
const apiList = [
  {
    url: "/userGateway/userSentry/login", // 用户登录
    method: "post",
    key: "params",
  },
  {
    url: "/userGateway/userSentry/loginByCode", // 验证码登录
    method: "post",
  },
];

const API = {};
apiList.forEach(({ url, method, key = "params" }) => {
  // 使用正则取到接口路径的最后一个子串，比如: loginByCode
  const apiName = /[^/]+$/.exec(url)[0];
  if (apiName) {
    API[apiName] = (data) => {
      const props = { url, method };
      props[key] = data;
      return axios(props);
    };
  }
});
export default API;
