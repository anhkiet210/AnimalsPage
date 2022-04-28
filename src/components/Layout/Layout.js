import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Content from "./Content";
const Layout = (props) => {
  return (
    <>
      <Topbar />
      <div className="flex w-full">
        <Sidebar chilren={props.sidebarChilren} />
        <Content children={props.contentChilren} />
      </div>
    </>
  );
};
export default Layout;
