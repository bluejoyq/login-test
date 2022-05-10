import axios from "axios";
import { CustomBtn } from "../commons/btn";
import useAuthStore from "../store/auth";

function Logout() {
  const logout = useAuthStore((state) => state.logout);
  const authToken = useAuthStore((state) => state.authToken);
  const handleLogout = () => {
    logout();
    axios.post(`https://oauth2.googleapis.com/revoke?token=${authToken}`);
    window.location.assign("http://localhost:3000/");
  };

  return <CustomBtn onClick={handleLogout}>logout</CustomBtn>;
}

export default Logout;
