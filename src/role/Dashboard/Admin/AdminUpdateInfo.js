import AdminLayout from "./AdminLayout";
import FormInput from "../../../components/Form/FormInput";
import FormHeader from "../../../components/Form/FormHeader";
import { UploadIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";
import axios from "axios";
import { getProfile } from "../CallAPI";
import { useDispatch, useSelector } from "react-redux";


const AdminUpdateInfo = () => {

  const userLocal = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const currentUser = userLocal && JSON.parse(userLocal).currentUser;
  const [user, setUser] = useState()

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [birth, setBirth] = useState()
  const [gender, setGender] = useState()
  const [avatar, setAvatar] = useState()
  const [loading, setLoading] = useState(false)

  useEffect( () => {
    getProfile(currentUser.data.accessToken, setUser, setLoading)
  }, [])

  useEffect( () => {
    setName(user?.name)
    setEmail(user?.email)
    setBirth(user?.birth)
    setGender(user?.gender)
    setAvatar(user?.avatar)
  }, [user])


  const getName = (e) => {
    setName(e.target.value)
  }

  const getBirth = (e) => {
    setBirth(e.target.value)
  }

  const getGender = (e) => {
    setGender(e.target.value)
  }

  const handleUpdateLoadImg = async (e) => {
    const uploadData = new FormData();
    uploadData.append("file", e.target.files[0]);
    try {
      setLoading(true)
      const res = await axios.put("http://localhost:5000/api/users/update-my-avatar", uploadData, {
        headers: {
          x_authorization: currentUser.data.accessToken,
        },
      })
      console.log(res);
      setLoading(false)
      alert("Cập nhật ảnh đại diện thành công!")
      window.location.reload()
    } catch (err) {
      setLoading(false)
      console.log(err);
    }

  }

  const updateProfile = async (user) => {
    const config = {
      headers: {
        x_authorization: currentUser.data.accessToken,
      },
    };
    try {
      setLoading(true)
      const res = await axios.put("http://localhost:5000/api/users/update-my-info", user, config)
      setLoading(false)
      alert("Cập nhật thông tin thành công!")
    } catch (err) {
      setLoading(false)
      console.log(err);
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const updateData = {
      "name": name,
      "birth": birth,
      "gender": gender
    }

    updateProfile(updateData)
  }
  console.log(new Date(birth)?.toLocaleDateString());

  return loading ? <LoadingSpinner /> : (
    <AdminLayout
      contentChilren={
        <form className="flex h-fit my-[5%] flex-col w-full bg-[#ffffff] p-6 rounded shadow-lg" onSubmit={(e) => onSubmit(e)}>
          <FormHeader title="Cập nhật thông tin cá nhân" />
          <FormInput
            id="fullname"
            label="Họ tên  :"
            type="text"
            value={name}
            onChange={(e) => getName(e)}
          />
          <FormInput
            id="email"
            label="Email :"
            type="email"
            value={email}
            readOnly
          />
          <FormInput
            id="year"
            label="Năm sinh :"
            type="date"
            // value={new Date(birth)?.toLocaleDateString()}
            value={birth && birth.slice(0, 10)}
            onChange={(e) => getBirth(e)}
          />
          <div className="flex my-2 p-2">
            <span>Giới tính : </span>
            <div className="mx-4">
              <input
                type="radio"
                id="male"
                className="mr-2"
                name="gender"
                value="Nam"
                defaultChecked={gender && gender === "Nam"}
                onChange={(e) => getGender(e)}
              />
              <label htmlFor="male">Nam</label>
            </div>
            <div className="mx-4">
              <input
                type="radio"
                id="female"
                className="mr-2"
                name="gender"
                value="Nữ"
                defaultChecked={gender && gender === "Nữ"}
                onChange={(e) => getGender(e)}
              />
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
            <input 
            type="file" 
            hidden 
            id="image" 
            onChange={(e) => handleUpdateLoadImg(e)}
             />
            <img className="w-[200px] h-[200px] ml-[50px]" src={avatar} />
          </div>
          <div className="flex items-center justify-center py-4">
            <button
              type="submit"
              className="text-white rounded-full px-6 py-2 bg-purple-gradient inline-block w-[150px] mt-6"
            >
              Cập nhật
            </button>
          </div>
        </form>
      }
    />
  );
};
export default AdminUpdateInfo;
