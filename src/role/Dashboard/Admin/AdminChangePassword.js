import AdminLayout from "./AdminLayout";
import FormInput from "../../../components/Form/FormInput";
import FormHeader from "../../../components/Form/FormHeader";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";
import { useState } from "react";
import axios from "axios";
import bcrypt from "bcryptjs/dist/bcrypt";

const AdminChangePassword = () => {

  const [loading, setLoading] = useState(false)
  const [currentPass, setCurrentPass] = useState()
  const [newPass, setNewPass] = useState()
  const [comfirmPass, setComfirmPass] = useState()
  const [errCurrentPass, setErrCurrentPass] = useState(false)
  const [errComfirmPass, setErrComfirmPass] = useState(false)

  const userLocal = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const currentUser = userLocal && JSON.parse(userLocal).currentUser;
  const idUser = currentUser.data.user._id
  const pass = currentUser.data.user.password


  //get current pass
  const getCurrentPass = (e) => {
    setCurrentPass(e.target.value.trim())
  }

  //get new pass
  const getNewPass = (e) => {
    setNewPass(e.target.value.trim())
  }

  //get comfirm pass
  const getComfirmPass = (e) => {
    setComfirmPass(e.target.value.trim())
  }

  const handleChangePass = (id, pass) => {
    var config = {
      method: 'put',
      url: `http://localhost:5000/api/users/reset-password/${id}`,
      data: {
        password: pass
      }
    };

    const resDate = async () => {
      try {
        setLoading(true)
        const res = await axios(config)
        setLoading(false)
        alert("Đổi mật khẩu thành công!")
      } catch (err) {
        setLoading(false)
        console.log(err);
        alert("Lỗi")
      }
    }

    resDate()
  }

  //handle submit form
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!bcrypt.compareSync(currentPass, pass)) {
      setErrCurrentPass(true)
      return
    }else{
      setErrCurrentPass(false)
    }

    if (newPass !== comfirmPass) {
      setErrComfirmPass(true)
      return
    }else{
      setErrComfirmPass(false)
    }

    handleChangePass(idUser, newPass)

  }

  return loading ? <LoadingSpinner /> : (
    <AdminLayout
      contentChilren={
        <form className="flex h-full flex-col w-full bg-[#ffffff] p-6 rounded mb-4" onSubmit={(e) => handleSubmit(e)}>
          <FormHeader title="Đổi mật khẩu" />
          <FormInput
            id="current-password"
            label="Mật khẩu hiện tại  :"
            type="password"
            onChange={(e) => getCurrentPass(e)}
            required
          />
          <FormInput 
          id="new-password" 
          label="Mật khẩu mới :" 
          type="password" 
          onChange={(e) => getNewPass(e)}
          required
          minLength={8}
          />
          <FormInput
            id="rewrite-password"
            label="Nhập lại mật khẩu :"
            type="password"
            onChange={(e) => getComfirmPass(e)}
            required
            maxLength={15}
          />
          {errCurrentPass && <p style={{ color: '#ff4d4d', marginBottom: '15px', fontWeight: 'bold' }}>Mật khẩu hiện tại không đúng</p>}
          {errComfirmPass && <p style={{ color: '#ff4d4d', marginBottom: '15px', fontWeight: 'bold' }}>Mật khẩu xác nhận không đúng</p>}
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
