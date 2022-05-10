/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { CustomBtn } from "../commons/btn";
import axios, { AxiosResponse } from "axios";
import useAuthStore from "../store/auth";
const getEmail = () => {
  const isLogin = useAuthStore((state) => state.isLogin);
  const authToken = useAuthStore((state) => state.authToken);

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
        window.location.assign("http://localhost:3000");
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
