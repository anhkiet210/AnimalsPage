import { Routes, Route, Outlet } from "react-router-dom";
import Home from "../role/Client/Home";
import Explore from "../role/Client/Explore/Explore";
import ClientAuth from "../role/Client/ClientAuth";
import ExploreDetail from "../role/Client/Explore/ExploreDetail";

const Client = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="explore" element={<Outlet />}>
        <Route path="all" element={<Explore />} />
        <Route path=":eid" element={<ExploreDetail />} />
      </Route>
      <Route path="/auth" element={<ClientAuth />} />
    </Routes>
  );
};
export default Client;
