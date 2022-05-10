import { CustomBtn } from "../commons/btn";
const GOOGLE_ID = process.env.REACT_APP_GOOGLE_ID;
const GoogleURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_ID}&response_type=token&redirect_uri=http://localhost:3000/redirect&scope=https://www.googleapis.com/auth/userinfo.email`;

function Google() {
  const oAuthHandler = () => {
    window.location.assign(GoogleURL);
  };

  return <CustomBtn onClick={oAuthHandler}>Google Login하기</CustomBtn>;
}

export default Google;
