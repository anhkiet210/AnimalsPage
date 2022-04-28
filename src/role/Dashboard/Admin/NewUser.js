import AdminLayout from "./AdminLayout";
import FormHeader from "../../../components/Form/FormHeader";
import FormInput from "../../../components/Form/FormInput";
import { useState } from "react";
import axios from "axios"
import LoadingSpinner from "../../../components/UI/LoadingSpinner";

const NewUSer = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [birth, setBirth] = useState()
  const [gender, setGender] = useState('')
  const [loading, setLoading] = useState(false)



  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name: name.trim(),
      email: email.trim(),
      password: password.trim()
    }

    try{
      setLoading(true)
    await axios.post("http://localhost:5000/api/auth/register", newUser)
    setLoading(false)
    alert("Thêm người dùng thành công!")
    }catch(err){
      setLoading(false)
      console.log(err);
    }

    console.log(newUser);
  }


  return loading ? <LoadingSpinner /> : (
    <AdminLayout contentChilren={
      <form className="flex h-fit my-[5%] flex-col w-full bg-[#ffffff] p-6 rounded shadow-lg" onSubmit={handleSubmit}>
        <FormHeader title="Thêm người dùng " />
        <FormInput
          id="fullname"
          label="Họ tên  :"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          id="email"
          label="Email :"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          id="password"
          label="Mật khẩu :"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex items-center justify-center py-4">
          <button
            type="submit"
            className="text-white rounded-full px-6 py-2 bg-purple-gradient inline-block w-[150px] mt-6"
          >
            Thêm
          </button>
        </div>
      </form>
    } />
  )
}
export default NewUSer;