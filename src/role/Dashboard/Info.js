import AdminLayout from "./Admin/AdminLayout";
import FormInput from "../../components/Form/FormInput";
import FormHeader from "../../components/Form/FormHeader";
import { UploadIcon } from "@heroicons/react/outline";
const AdminInfo = () => {
  return (
    <AdminLayout
      contentChilren={
        <form className="flex h-fit my-[5%] flex-col w-full bg-[#ffffff] p-6 rounded shadow-lg">
          <FormHeader title="Cập nhật thông tin cá nhân" />
          <FormInput id="fullname" label="Họ tên  :" type="text" />
          <FormInput id="email" label="Email :" type="email" />
          <FormInput id="year" label="Năm sinh :" type="text" />
          <div className="flex my-2 p-2">
            <span>Giới tính : </span>
            <div className="mx-4">
              <input type="radio" id="male" className="mr-2" />
              <label htmlFor="male">Nam</label>
            </div>
            <div className="mx-4">
              <input type="radio" id="female" className="mr-2" />
              <label htmlFor="female">Nữ</label>
            </div>
          </div>
          <div className="px-2 ">
            <label>Ảnh đại diện: </label>
            <label
              htmlFor="image"
              className="flex text-[14px] px-6 py-2 rounded-lg cursor-pointer border border-purple-gradient w-[150px] my-3 text-purple-gradient"
            >
              Upload Ảnh <UploadIcon className="ml-1 w-5 h-5" />
            </label>
            <input type="file" hidden id="image" />
          </div>
          <div className="flex items-center justify-center py-4">
            <button
              type="submit"
              className="text-white rounded-full px-6 py-2 bg-purple-gradient inline-block w-[150px]"
            >
              Cập nhật
            </button>
          </div>
        </form>
      }
    />
  );
};
export default AdminInfo;
