import { useEffect, useState } from "react";
import { CustomBtn } from "../commons/btn";
import axios, { AxiosResponse } from "axios";
const GOOGLE_ID = process.env.REACT_APP_GOOGLE_ID;
const GOOGLE_TOKEN = process.env.REACT_APP_GOOGLE_TOKEN;
let GoogleURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_ID}&response_type=token&redirect_uri=http://localhost:3000&scope=https://www.googleapis.com/auth/userinfo.email`;
function Google() {
  const [data, setData] = useState<AxiosResponse | null>(null);
  console.log(GoogleURL);
  const oAuthHandler = () => {
    window.location.assign(GoogleURL);
  };

  const CheckAuth = async () => {
    await axios
      .get(
        "https://www.googleapis.com/oauth2/v2/userinfo?access_token=" +
          GOOGLE_TOKEN,
        {
          headers: {
            authorization: `token ${GOOGLE_TOKEN}`,
            accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => console.log("oAuth token expired"));
  };
  useEffect(() => {
    CheckAuth();
  });
  return (
    <div className="w-full h-64 flex justify-center items-center">
      <CustomBtn onClick={oAuthHandler}>Google Login하기</CustomBtn>
    </div>
  );
}

export default Google;
