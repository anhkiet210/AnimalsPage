import {
  HomeIcon,
  UserIcon,
  IdentificationIcon,
  LockClosedIcon,
  LogoutIcon,
  UserAddIcon
} from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../../components/Layout/Layout";
import { logout } from "../../../redux/userSlice";

const AdminLayout = (props) => {

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
          <ul>
            <div className="uppercase text-gray-500 font-semibold py-2 text-[10px]">
              List
            </div>
            <Link to="/admin/manage">
              <li className="sidebar-item">
                <UserIcon className="w-5 h-5 mr-2" />
                <span>Manage user </span>
              </li>
            </Link>
          </ul>
          <ul className="text-[13px]">
            <div className="uppercase text-gray-500 font-semibold py-2 text-[10px]">
              user
            </div>
            <Link to="/admin/info">
              <li className="sidebar-item">
                <IdentificationIcon className="w-5 h-5 mr-2" />
                <span>Profile </span>
              </li>
            </Link>
            <Link to="/admin/new-user">
              <li className="sidebar-item">
                <UserAddIcon className="w-5 h-5 mr-2" />
                <span>New User </span>
              </li>
            </Link>
            <Link to="/admin/change-password">
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
export default AdminLayout;
