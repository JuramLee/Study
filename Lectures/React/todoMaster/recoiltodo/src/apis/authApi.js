const { Axios } = require("./core");

const PATH = "/user"; // 관심사 분리
const TODO = "/todo";

const AuthApi = {
  async login(email, password) {
    console.log(email, password);
    const res = await Axios.post(PATH + "/login", { email, password });
    console.log(res);
    return res.data;
  },
  signup(email, password) {
    return Axios.post(PATH + "/sign", { email, password });
  },
  async logout() {
    const res = await Axios.post(PATH + "/logout");
    return res.data;
  },
};

export default AuthApi;
// 객체 안에 함수가 있으면 메소드라고 부른다.
