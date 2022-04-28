import { useEffect, useState } from "react";
import { SearchIcon, MoonIcon, SunIcon } from "@heroicons/react/outline";
import { getProfile } from "../../role/Dashboard/CallAPI";

const Topbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const userLocal = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const currentUser = userLocal && JSON.parse(userLocal).currentUser;
  const [user, setUser] = useState()
  const [avatar, setAvatar] = useState()
  const [loading, setLoading] = useState(false)

  useEffect( () => {
    getProfile(currentUser.data.accessToken, setUser, setLoading)
  }, [])

  useEffect( () => {
    setAvatar(user?.avatar)
  }, [user])

  const handleDarkMode = () => {
    setIsVisible((state) => !state);
  };
  const handleLightMode = () => {
    setIsVisible((state) => !state);
  };
  return (
    <div className="flex items-center justify-between  bg-[#fff] px-10 py-4 z-50 fixed top-0 left-0 w-[85%] ml-[15%] border-b border-gray-300">
      <div className="relative">
        <SearchIcon className="w-4 h-4 left-2 absolute top-3" />
        <input
          type="text"
          className="outline-none focus:outline-none text-sm border border-gray-400 rounded px-8 py-2 bg-[#f7f7f7]"
          placeholder="Search ..."
        />
      </div>
      <div className="flex items-center">
        {!isVisible ? (
          <MoonIcon
            className="w-6 h-6 mr-4 cursor-pointer text-gray-600"
            onClick={handleDarkMode}
          />
        ) : (
          <SunIcon
            className="w-6 h-6 mr-4 cursor-pointer text-gray-600"
            onClick={handleLightMode}
          />
        )}

        <div className="flex items-center relative">
          <div className="relative">
            <img
              src={avatar}
              alt=""
              className="w-[40px] h-[40px] rounded-full object-cover mr-2 cursor-pointer"
            />
            <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-600 border-2 border-white dark:border-white rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Topbar;
