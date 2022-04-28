import {
  HomeIcon,
  PencilAltIcon,
  IdentificationIcon,
  LockClosedIcon,
  BookOpenIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../../components/Layout/Layout";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/userSlice";
const AuthorLayout = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    // navigate("/");
    window.location.href = "/"
  };
  return (
    <Layout
      sidebarChilren={
        <ul className="sidebar-list">
          <ul className="text-[13px]">
            <div className="uppercase text-gray-500 font-semibold py-2 text-[10px]">
              main
            </div>
            <Link to="/">
              <li className="sidebar-item">
                <HomeIcon className="w-5 h-5 mr-2" />
                <span>Dashboard</span>
              </li>
            </Link>
          </ul>
          <ul className="text-[13px]">
            <div className="uppercase text-gray-500 font-semibold py-2 text-[10px]">
              List
            </div>
            <Link to="/post/new">
              <li className="sidebar-item">
                <PencilAltIcon className="w-5 h-5 mr-2" />
                <span>Thêm bài viết </span>
              </li>
            </Link>
            <Link to="/post/manage">
              <li className="sidebar-item">
                <BookOpenIcon className="w-5 h-5 mr-2" />
                <span>Bài viết của tôi</span>
              </li>
            </Link>
          </ul>
          <ul className="text-[13px]">
            <div className="uppercase text-gray-500 font-semibold py-2 text-[10px]">
              user
            </div>
            <Link to="/author/info">
              <li className="sidebar-item">
                <IdentificationIcon className="w-5 h-5 mr-2" />
                <span>Profile </span>
              </li>
            </Link>
            <Link to="/author/change-password">
              <li className="sidebar-item">
                <LockClosedIcon className="w-5 h-5 mr-2" />
                <span>Change Password</span>
              </li>
            </Link>
            {/* <Link to="/logout"> */}
            <li className="sidebar-item" onClick={handleLogout}>
              <LogoutIcon className="w-5 h-5 mr-2" />
              <span>Log out </span>
            </li>
            {/* </Link> */}
          </ul>
        </ul>
      }
      contentChilren={props.contentChilren}
    />
  );
};
export default AuthorLayout;
