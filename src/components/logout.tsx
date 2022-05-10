import axios from "axios";
import { ReactElement } from "react";
import { CustomBtn } from "../commons/btn";
import useAuthStore from "../store/auth";

const Logout = (): ReactElement => {
  const logout = useAuthStore((state) => state.logout);
  const authToken = useAuthStore((state) => state.authToken);
  const handleLogout = async () => {
    logout();
    await axios
      .post(`https://oauth2.googleapis.com/revoke?token=${authToken}`)
      .then(() => {
        window.location.assign("http://localhost:3000/");
      })
      .catch(() => {
        alert("로그아웃에 실패했습니다.");
      });
  };

  return <CustomBtn onClick={handleLogout}>logout</CustomBtn>;
};

export default Logout;
