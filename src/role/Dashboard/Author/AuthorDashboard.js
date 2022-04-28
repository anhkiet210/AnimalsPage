import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../../components/UI/LoadingSpinner"
import { getAllPost } from "../CallAPI";
import AuthorLayout from "./AuthorLayout";
import axios from "axios"

const AuthorDashboard = () => {

  const [loading, setLoading] = useState(false)
  const [posts,setPosts] = useState([]);

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

  useEffect(()=>{
  
      const fetchData = async () => {
          setLoading(true)
          try {
              const response = await axios.get("http://localhost:5000/api/animals")
              const responseData = await response.data
              // dispatch(postSlice.actions.getAllPost(resData))
              setPosts(responseData);
              console.log(responseData)
              setLoading(false)
          }
          catch (err) {
              setLoading(false)
              console.log(err);
          }
      }
  
      fetchData()
  
  },[])

  // const postLocal = JSON.parse(localStorage.getItem("persist:root"))?.post
  // const allPost = postLocal && JSON.parse(postLocal).allPost

  const userLocal = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const currentUser = userLocal && JSON.parse(userLocal).currentUser;
  const user = currentUser?.data.user

  // console.log(postLocal)
  // console.log(allPost)
  const postApproval = posts.filter((item) => item.postStatus === 0 && item.sampleCollector === user._id)
  const postResent = posts.filter((item) => item.postStatus === 1 && item.sampleCollector === user._id)
  // var sttPostApproval = 0
  // var sttPostResent = 0

  return loading ? <LoadingSpinner /> : (
    <AuthorLayout
      contentChilren={
        <div className=" bg-[#ffffff] p-6">
          <div>
            <h1 className="text-xl my-4">Bài viết chờ duyệt</h1>
            <table className="border-collapse border border-slate-500">
              <thead>
                <tr>
                  <th className="post-table_item">STT</th>
                  <th className="post-table_item">Tên loài</th>
                  <th className="post-table_item">Hình ảnh</th>
                  {/* <th className="post-table_item">Người thêm</th> */}
                  <th className="post-table_item">Ngày đăng</th>
                  <th className="post-table_item">Người thu mẫu</th>
                  <th className="post-table_item" colSpan={2}>Thao tác</th>
                </tr>
              </thead>
              <tbody>
               {postApproval?.length > 0 ? postApproval?.map((post,index) => <tr key={index}>
                          <td className="post-table_item">{index + 1}</td>
                          <td className="post-table_item">{post.vietnameseName}</td>
                          <td className="post-table_item">
                            <img
                              src={post.media[0].url}
                              alt=""
                              className="w-[150px] h-[100px] object-cover"
                            />
                          </td>
                          {/* <td className="post-table_item">{}</td> */}
                          <td className="post-table_item">{new Date(post.createdAt).toLocaleDateString()}</td>
                          <td className="post-table_item">Nguyễn Quang Cường</td>
                          <td className="post-table_item">
                            <Link to={`post/edit/${post._id}`} className="rounded-full px-4 text-blue-500 py-2 border border-blue-500 whitespace-nowrap">
                              Sửa
                            </Link >
                            
                          </td>
                          <td className="post-table_item">
                            <button className="rounded-full px-4 text-red-500 py-2 border border-red-500 whitespace-nowrap" onClick={() => handleDeletePost(post._id)}>
                              Xóa
                            </button>
                          </td>
                        </tr>
                        ) :  
                      <tr>
                        <td className="post-table_item" colSpan={7} style={{ textAlign: 'center' }}>NOT FOUND</td>
                      </tr>}
                {/* {
                  postApproval.length > 0 ?
                    postApproval.map((item, i) => {
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
                          <td className="post-table_item">{user.name}</td>
                          <td className="post-table_item">{item.createdAt}</td>
                          <td className="post-table_item">Nguyễn Quang Cường</td>
                          <td className="post-table_item">
                            <Link to={`post/edit/${item._id}`} className="rounded-full px-4 text-blue-500 py-2 border border-blue-500 whitespace-nowrap">
                              Sửa
                            </Link >
                            
                          </td>
                          <td className="post-table_item">
                            <button className="rounded-full px-4 text-red-500 py-2 border border-red-500 whitespace-nowrap">
                              Xóa
                            </button>
                          </td>
                        </tr>
                      )
                    }) :
                    <tr>
                      <td className="post-table_item" colSpan={7} style={{ textAlign: 'center' }}>NOT FOUND</td>
                    </tr>
                } */}
                
              </tbody>
            </table>
          </div>
          <div>
            <h1 className="text-xl my-4">Bài viết gần đây</h1>
            <table className="border-collapse border border-slate-500">
              <thead>
                <tr>
                  <th className="post-table_item">STT</th>
                  <th className="post-table_item">Tên loài</th>
                  <th className="post-table_item">Hình ảnh</th>
                  <th className="post-table_item">Người thêm</th>
                  <th className="post-table_item">Ngày đăng</th>
                  <th className="post-table_item">Người thu mẫu</th>
                  <th className="post-table_item">Chi tiết</th>
                </tr>
              </thead>
              <tbody>
                {
                  postResent.length > 0 ?
                    postResent.slice(0, 19).map((item, i) => {
                      return (
                        <tr key={i}>
                          <td className="post-table_item">{i + 1}</td>
                          <td className="post-table_item">{item.vietnameseName}</td>
                          <td className="post-table_item">
                            <img
                              src={item.media[0].url}
                              alt=""
                              className="w-[150px] h-[100px] object-cover"
                            />
                          </td>
                          <td className="post-table_item">{user.name}</td>
                          <td className="post-table_item">{item.createdAt}</td>
                          <td className="post-table_item">Nguyễn Quang Cường</td>
                          <td className="post-table_item">
                            <Link
                              to={`/post/detail/${item._id}`}
                              className="rounded-full px-4 text-green-500 py-2 border border-green-500 whitespace-nowrap"
                            >
                              Chi tiết
                            </Link>
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
        </div>
      }
    />
  );
};
export default AuthorDashboard;
