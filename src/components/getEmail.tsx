/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { ReactElement } from "react";
import { CustomBtn } from "../commons/btn";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/auth";

const getEmail = (): ReactElement => {
  const authToken = useAuthStore((state) => state.authToken);
  const navigate = useNavigate();
  const CheckAuth = async (accessToken: string) => {
    await axios
      .get("https://www.googleapis.com/oauth2/v2/userinfo", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        alert(res.data.email);
      })
      .catch((err) => {
        alert("oAuth token expired");
        navigate("/");
      });
  };
  return (
    <CustomBtn
      onClick={() => {
        CheckAuth(authToken);
      }}
    >
      getEmail
    </CustomBtn>
  );
};

export default getEmail;
