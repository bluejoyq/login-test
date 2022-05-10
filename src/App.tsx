import { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SocialLogin from "./pages/socialLogin";
const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="redirect" element={<SocialLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
