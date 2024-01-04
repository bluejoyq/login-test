import { ReactElement } from "react";
import { CustomBtn } from "../commons/btn";

const GOOGLE_ID = "608596934611-2rescvi0hp3g3canj2sjhjrni8235jet.apps.googleusercontent.com";
const GoogleURL: string = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_ID}&response_type=token&redirect_uri=http://localhost:3000/redirect&scope=https://www.googleapis.com/auth/userinfo.email`;

const Google = (): ReactElement => {
  const oAuthHandler = (): void => {
    window.location.assign(GoogleURL);
  };

  return <CustomBtn onClick={oAuthHandler}>Google Login하기</CustomBtn>;
};

export default Google;
