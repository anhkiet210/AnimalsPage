const Sidebar = ({ chilren }) => {
  return (
    <div className="bg-[#fff] w-[15%] fixed h-screen flex  flex-col border border-gray-300  pb-6 text-sm shadow-lg">
      <div className="h-[12%] border-b border-gray-300 flex items-center justify-center text-purple-gradient text-2xl font-bold">
        <h1 className="logo">searchingadmin</h1>
      </div>
      <div className="h-[88%]">{chilren}</div>
    </div>
  );
};
export default Sidebar;
