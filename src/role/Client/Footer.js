import { HeartIcon } from "@heroicons/react/outline";
const Footer = () => {
  return (
    <footer
      className="flex items-center justify-center flex-col py-[5%] bg-[#EFF3F9]"
      id="footer"
    >
      <div className="py-6 logo text-4xl active">happysearching</div>
      <p className="text-gray-500 my-4">
        Search the <span className="active font-bold">happysearching</span> and
        make everything easier .
      </p>
      <p className="text-gray-400 text-sm flex items-center">
        © 2022. All rights reserved. From Soc Trang with love{" "}
        <HeartIcon className="w-5 h-5 text-purple-gradient ml-2" />{" "}
      </p>
    </footer>
  );
};
export default Footer;
