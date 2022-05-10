import { useEffect } from "react";
import { CustomBtn } from "../commons/btn";
import useAuthStore from "../store/auth";
const GOOGLE_ID = process.env.REACT_APP_GOOGLE_ID;
let GoogleURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_ID}&response_type=token&redirect_uri=http://localhost:3000&scope=https://www.googleapis.com/auth/userinfo.email`;

function Google() {
  const login = useAuthStore((state) => state.login);

  const oAuthHandler = () => {
    window.location.assign(GoogleURL);
  };
  useEffect(() => {
    const url = new URL(window.location.href);
    const hash = url.hash;
    if (!hash) return;
    // 주소에서 acesstoken 따오기
    const accessToken = hash.split("=")[1].split("&")[0];
    login(accessToken);
  }, [login]);
  return <CustomBtn onClick={oAuthHandler}>Google Login하기</CustomBtn>;
}

export default Google;
