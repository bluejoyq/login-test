import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SocialLogin from "./pages/socialLogin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="redirect" element={<SocialLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
