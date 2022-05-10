import React from "react";
import Google from "./components/google";
import GetEmail from "./components/getEmail";
import Logout from "./components/logout";
function App() {
  return (
    <div className="w-full h-64 flex justify-center items-center flex-col gap-5">
      <Google />
      <GetEmail />
      <Logout />
    </div>
  );
}

export default App;
