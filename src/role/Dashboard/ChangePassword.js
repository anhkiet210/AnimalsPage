import AdminLayout from "./Admin/AdminLayout";
import FormInput from "../../components/Form/FormInput";
import FormHeader from "../../components/Form/FormHeader";
const AdminChangePassword = () => {
  return (
    <AdminLayout
      contentChilren={
        <form className="flex h-full flex-col w-full bg-[#ffffff] p-6 rounded mb-4">
          <FormHeader title="Đổi mật khẩu" />
          <FormInput
            id="current-password"
            label="Mật khẩu hiện tại  :"
            type="text"
          />
          <FormInput id="new-password" label="Mật khẩu mới :" type="email" />
          <FormInput
            id="rewrite-password"
            label="Nhập lại mật khẩu :"
            type="text"
          />
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
export default AdminChangePassword;
