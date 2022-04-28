import AuthorLayout from "./AuthorLayout";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "../CallAPI";
const AuthorPost = () => {
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const allPost = useSelector(state => state.post.allPost)
  const currentUser = useSelector(state => state.user.currentUser)
  const user = currentUser.data.user
  const postResent = allPost.filter((item) => item.postStatus === 1 && item.sampleCollector === user._id)
  var sttPostResent = 0

  useEffect(() => {
    getAllPost(dispatch, setLoading)
  }, [])

  return loading ? <LoadingSpinner /> : (
    <AuthorLayout
      contentChilren={
        <div className=" bg-[#ffffff] p-6">
          <h1 className="text-xl my-4">Bài viết của tôi</h1>
          <table className="border-collapse border border-slate-500">
            <thead>
              <tr>
                <th className="post-table_item">STT</th>
                <th className="post-table_item">Tên loài</th>
                <th className="post-table_item">Hình ảnh</th>
                <th className="post-table_item">Người thêm</th>
                <th className="post-table_item">Ngày đăng</th>
                <th className="post-table_item">Người thu mẫu</th>
                <th className="post-table_item">Thao tác</th>
              </tr>
            </thead>
            <tbody>
            {
                  postResent.length > 0 ?
                    postResent.slice(0, 19).map((item, i) => {
                      sttPostResent++
                      return (
                        <tr key={i}>
                          <td className="post-table_item">{sttPostResent}</td>
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
      }
    />
  );
};
export default AuthorPost;
