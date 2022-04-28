import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Client from "./authorization/Client";
import Admin from "./authorization/Admin";
import Researcher from "./authorization/Researcher";
function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [role, setRole] = useState(null);
  useEffect(() => {
    if (currentUser) {
      setRole(currentUser.data.user.permission);
    }
  }, [currentUser]);
  let homeRoute;
  if (!role) {
    homeRoute = <Client />; 
  } else if (role && role === "researcher") {
    homeRoute = <Researcher />;
  } else {
    homeRoute = <Admin />;
  }
  return <BrowserRouter>{homeRoute}</BrowserRouter>;
}

export default App;
