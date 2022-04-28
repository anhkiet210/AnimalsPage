import { Routes, Route, Outlet } from "react-router-dom";
import React from "react";
import NewPost from "../role/Dashboard/Author/NewPost";
import UpdatePost from "../role/Dashboard/Author/UpdatePost";
import PostDetail from "../role/Dashboard/Author/PostDetail";
import ManagePost from "../role/Dashboard/Author/ManagePost";
import AuthorUpdateInfo from "../role/Dashboard/Author/AuthorUpdateInfo";
import AuthorChangePassword from "../role/Dashboard/Author/AuthorChangePassword";
import AuthorDashboard from "../role/Dashboard/Author/AuthorDashboard";
function Researcher() {
  return (
    <Routes>
      <Route path="/" element={<AuthorDashboard />} />
      <Route path="author" element={<Outlet />}>
        <Route path="info" element={<AuthorUpdateInfo />} />
        <Route path="change-password" element={<AuthorChangePassword />} />
      </Route>

      <Route path="post" element={<Outlet />}>
        <Route path="new" element={<NewPost />} />
        <Route path="edit/:pid" element={<UpdatePost />} />
        <Route path="detail/:pid" element={<PostDetail />} />
        <Route path="manage" element={<ManagePost />} />
      </Route>
    </Routes>
  );
}

export default Researcher;
