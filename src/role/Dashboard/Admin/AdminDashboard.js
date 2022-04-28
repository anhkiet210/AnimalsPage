import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";
import { getAllPost } from "../CallAPI";
import AdminLayout from "./AdminLayout";

const AdminDashboard = () => {
  
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)

  const allPost = useSelector(state =>state.post.allPost)
  const postApproval = allPost?.filter((item) => item.postStatus === 0)
  var sttPostApproval = 0

  useEffect( () => {
    getAllPost(dispatch, setLoading)
  }, [])

  const handleDeletePost = async (id) => {
    try {
        setLoading(true)
        await axios.delete(`http://localhost:5000/api/animals/${id}`)
        setLoading(false)
        alert("Đã xóa bài viết!")
    } catch (error) {
      setLoading(false)
      console.log(error)
      alert("Lỗi")
    }
  }

  return loading ? <LoadingSpinner /> :(
    <AdminLayout
      contentChilren={
        <div className="bg-[#ffffff] p-6 text-gray-600">
          <h1 className="text-xl my-4 ">Bài viết chờ duyệt</h1>
          <table className="border-collapse border border-slate-500 text-sm">
            <thead>
              <tr>
                <th className="post-table_item">STT</th>
                <th className="post-table_item">Tên loài</th>
                <th className="post-table_item">Hình ảnh</th>
                {/* <th className="post-table_item">Người thêm</th> */}
                <th className="post-table_item">Ngày đăng</th>
                <th className="post-table_item">Người thu mẫu</th>
                <th className="post-table_item">Sửa </th>
                <th className="post-table_item">Xóa</th>
              </tr>
            </thead>
            <tbody>
              {                 
                postApproval?.length > 0 ?
                  postApproval?.reverse().map((item, i) => {
                    sttPostApproval++
                    return (
                      <tr key={i}>
                        <td className="post-table_item">{sttPostApproval}</td>
                        <td className="post-table_item">{item.vietnameseName}</td>
                        <td className="post-table_item">
                          <img
                            src={item.media[0].url}
                            alt=""
                            className="w-[150px] h-[100px] object-cover"
                          />
                        </td>
                        {/* <td className="post-table_item">name</td> */}
                        <td className="post-table_item">{item.createdAt.slice(0, 10)}</td>
                        <td className="post-table_item">Nguyễn Quang Cường</td>
                        <td className="post-table_item">
                          <Link to={`post/detail/${item._id}`} className="rounded-full px-4 text-blue-500 py-2 border border-blue-500 whitespace-nowrap">
                            Chi tiết
                          </Link >
                        </td>
                        <td className="post-table_item">
                          <button className="rounded-full px-4 text-red-500 py-2 border border-red-500 whitespace-nowrap" onClick={() => handleDeletePost(item._id)}>
                            Xóa
                          </button>
                        </td>
                      </tr>
                    )
                  }) :
                  <tr>
                    <td className="post-table_item" colSpan={7} style={{ textAlign: 'center' }}>NOT FOUND</td>
                  </tr>
              }
            </tbody>
          </table>
        </div>
      }
    />
  );
};
export default AdminDashboard;
