import { Routes, Route, Outlet } from "react-router-dom";
import React from "react";
import AdminUpdateInfo from "../role/Dashboard/Admin/AdminUpdateInfo";
import AdminChangePassword from "../role/Dashboard/Admin/AdminChangePassword";
import ManageUser from "../role/Dashboard/Admin/ManageUser";
import AdminDashboard from "../role/Dashboard/Admin/AdminDashboard";
import PostDetail from "../role/Dashboard/Author/PostDetail"
import NewUSer from "../role/Dashboard/Admin/NewUser";
function Admin() {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="admin" element={<Outlet />}>
        <Route path="info" element={<AdminUpdateInfo />} />
        <Route path="new-user" element={<NewUSer />} />
        <Route path="change-password" element={<AdminChangePassword />} />
        <Route path="manage" element={<ManageUser />} />
      </Route>

      <Route path="post" element={<Outlet />}>
        <Route path="detail/:pid" element={<PostDetail />} />
      </Route>
    </Routes>
  );
}

export default Admin;
