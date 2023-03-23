import AuthApi from "apis/authApi";
import { Axios } from "apis/core";
import axios from "axios";
import { useAuth } from "contexts/auth";
import TokenService from "repository/TokenService";

function BasicHeader() {

  const auth = useAuth();

  const onLogout = async () => {
    await AuthApi.logout();
    auth.logout();
  }

  const onRefresh = async () => {
    const res = await Axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/jwt`);
    console.log(res.data.data)
  }

  return (
    <>
      HEADER
      <button onClick={onRefresh}>refresh</button>
      <button onClick={onLogout}>{ auth.accessToken ? "Logout" : "Login"}</button>
    </>
  );
}
export default BasicHeader;
