import Circle from "../components/UI/Circle";
import FormInput from "../components/Form/FormInput";
const Auth = () => {
  return (
    <div className="h-screen flex-col lg:flex-row w-full bg-[#ffffff] justify-center items-center flex gap-[20%] overflow-hidden px-[10%] py-[10%] sm:py-0">
      <div className="relative w-full lg:w-[45%] pl-[20%]">
        <Circle className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full bg-[#CFDFF1] absolute left-[0px] top-[-100px]" />
        <Circle className="w-[170px] h-[170px] sm:w-[250px] sm:h-[250px] rounded-full bg-[#DFE6FB] absolute left-[123px]  sm:left-[143px] top-[-155px]" />
        <Circle className="w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] rounded-full bg-[#C7E7FF] absolute left-[170px] sm:left-[250px] top-[-20px]" />
      </div>
      <form className=" w-full lg:w-[45%]">
        <h1 className="text-blue-800 font-medium text-2xl px-2 py-2 text-center md:text-left mb-2">
          Welcome!
        </h1>
        <FormInput type="email" placeholder="Your email" />
        <FormInput type="password" placeholder="Your password" />
        <div className=" px-2 py-2">
          <button
            type="button"
            className="font-medium text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80  text-sm px-5 py-2.5 text-center mr-2 my-2 w-[98%]"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default Auth;
