import { useState } from "react";
import ClientNavigation from "./ClientHeader/ClientNavigation";
import Footer from "./Footer";
import LoginImage from "../../images/startup.png";
import FormInput from "../../components/Form/FormInput";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ClientAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(currentUser);
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/login`,
        { email, password }
      );
      dispatch(login(response));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <ClientNavigation />
      <div className="flex items-center gap-10 py-[5%] px-[5%]">
        <form className=" w-full lg:w-[45%]" onSubmit={handleLogin}>
          <h1 className="text-purple-gradient font-medium text-2xl px-2 py-2 text-center md:text-left mb-2">
            Welcome!
          </h1>
          <FormInput
            type="email"
            placeholder="Your email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <FormInput
            type="password"
            placeholder="Your password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <div className=" px-2 py-2">
            <button
              type="submit"
              className="font-medium text-white rounded bg-purple-gradient focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80  text-sm px-5 py-2.5 text-center mr-2 my-2 w-[98%]"
            >
              Login
            </button>
          </div>
        </form>
        <div className="w-1/2">
          <img src={LoginImage} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ClientAuth;
