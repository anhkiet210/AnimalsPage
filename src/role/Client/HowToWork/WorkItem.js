const WorkItem = ({ number, text }) => {
  return (
    <div className="flex items-center gap-4 my-4">
      <div className="flex items-center justify-center w-[35px] h-[35px] text-center rounded text-white bg-purple-gradient my-2 text-sm">
        <span> {number}</span>
      </div>
      <span className="w-4/5">{text}</span>
    </div>
  );
};
export default WorkItem;
