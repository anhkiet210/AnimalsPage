import axios from "axios";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";
import AdminLayout from "./AdminLayout";

const ManageUser = () => {

  const [allUser, setAllUser] = useState()
  const [loading, setLoading] = useState(false)

  const researcher = allUser?.filter(item => item.permission === "researcher")
  var stt = 0

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await axios.get("http://localhost:5000/api/users")
        const resData = await res.data
        setAllUser(resData)
        setLoading(false)
      } catch (err) {
        setLoading(false)
        console.log(err);
      }
    }

    fetchData()
  }, [])

  const handleResetPass = async (id) => {
    var config = {
      method: 'put',
      url: `http://localhost:5000/api/users/reset-password/${id}`,
      data: {
        password: "12345678"
      }
    };
    try{
      setLoading(true)
      await axios(config)
      alert("Reset password successfully!")
      setLoading(false)
    }catch(err){
      setLoading(false)
      console.log(err);
    }
  } 

  const handleDeleteUser = async (id) => {
    try {
      setLoading(true)
      const res = await axios.delete(`http://localhost:5000/api/users/${id}`)
      alert("Xóa thành công!")
      window.location.reload()
    } catch (err) {
        setLoading(false)
        console.log(err);
    }
  }


  return loading ? <LoadingSpinner /> : (
    <AdminLayout
      contentChilren={
        <div className=" bg-[#ffffff] p-6">
          <h1 className="text-xl my-4">Tổng quan người dùng</h1>
          <table className="border-collapse border border-slate-500">
            <thead>
              <tr>
                <th className="post-table_item">STT</th>
                <th className="post-table_item">Họ tên</th>
                <th className="post-table_item">Email</th>
                <th className="post-table_item">Năm sinh</th>
                <th className="post-table_item">Giới tính</th>
                <th className="post-table_item">Ảnh đại diện</th>
                <th className="post-table_item">Reset password</th>
                <th className="post-table_item">Xóa</th>
              </tr>
            </thead>
            <tbody>
              {
                researcher?.length > 0 ?
                  researcher.map((item, i) => {
                    stt++
                    return (
                      <tr key={i}>
                        <td className="post-table_item">{stt}</td>
                        <td className="post-table_item">{item.name}</td>
                        <td className="post-table_item">{item.email}</td>
                        <td className="post-table_item">{item.birth !== null ? item.birth.slice(0, 10) : ''}</td>
                        <td className="post-table_item">{item.gender !== null ? item.gender : ''}</td>
                        <td className="post-table_item">
                          <img
                            src={item.avatar}
                            alt=""
                            className="w-[150px] h-[100px] object-cover"
                          />
                        </td>

                        <td className="post-table_item text-center">
                          <button className="rounded-full px-6 text-blue-500 py-2 border border-blue-500 whitespace-nowrap" title="Reset password thành 12345678" onClick={() => handleResetPass(item._id)}>
                            Reset
                          </button>
                        </td>
                        <td className="post-table_item">
                          <button className="rounded-full px-6 text-red-500 py-2 border border-red-500 whitespace-nowrap" title="Xóa nhân viên" onClick={() => handleDeleteUser(item._id)}>
                            Xóa
                          </button>
                        </td>
                      </tr>
                    )
                  }) :
                  <tr>
                    <td className="post-table_item">1</td>
                  </tr>
              }
            </tbody>
          </table>
        </div>
      }
    />
  );
};
export default ManageUser;
