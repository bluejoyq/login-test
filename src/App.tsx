import { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SocialLogin from "./pages/socialLogin";
import Home from "./pages/Home";
const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/googleLogin" element={<SocialLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
