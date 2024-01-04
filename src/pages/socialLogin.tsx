import { ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/auth";

const SocialLogin = (): ReactElement => {

  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  useEffect(() => {
    const url = new URL(window.location.href);
    const hash = url.hash;
    if (!hash) return;
    // 주소에서 acesstoken 따오기
    
    const accessToken = hash.split("=")[1].split("&")[0];

    login(accessToken);

    navigate("/");

  }, [login, navigate]);

  return (
    <div>

    </div>
  );
};

export default SocialLogin;
