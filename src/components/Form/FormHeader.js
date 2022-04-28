const FormHeader = ({ title }) => {
  return (
    <h1 className="mb-6 text-center uppercase text-xl text-purple-gradient relative after:absolute after:w-4/5 after:h-[1px]  after:top-8 after:left-0 after:ml-[10%]">
      {title}
    </h1>
  );
};
export default FormHeader;
