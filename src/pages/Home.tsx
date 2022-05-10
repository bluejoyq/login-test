import Google from "../components/google";
import GetEmail from "../components/getEmail";
import Logout from "../components/logout";
const Home = () => {
  return (
    <div className="w-full h-64 flex justify-center items-center flex-col gap-5">
      <Google />
      <GetEmail />
      <Logout />
    </div>
  );
};

export default Home;
