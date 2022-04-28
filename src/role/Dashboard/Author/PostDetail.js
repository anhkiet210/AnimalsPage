import AuthorLayout from "./AuthorLayout";
import FormInput from "../../../components/Form/FormInput";
import FormHeader from "../../../components/Form/FormHeader";
import { UploadIcon } from "@heroicons/react/outline";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";
import axios from "axios";



const PostDetail = () => {

  const params = useParams()

  const userLocal = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const currentUser = userLocal && JSON.parse(userLocal).currentUser;
  const user = currentUser.data.user

  const postLocal = JSON.parse(localStorage.getItem("persist:root"))?.post
  const allPost = postLocal && JSON.parse(postLocal).allPost

  const postDetail = allPost.filter(item => item._id === params.pid)

  const [loading, setLoading] = useState(false)

  const handleUpdateStatusPost = async (id) => {
    const postStatus = {
      postStatus: 1
    }
    try{
      setLoading(true)
      const res =await axios.put(`http://localhost:5000/api/animals/${id}`, postStatus)
      console.log(res);
      setLoading(false)
      alert("Đã duyệt bài viết")
      window.location.href ='/'
    }catch(err){
      setLoading(false)
      console.log(err);
    }
  }

  console.log(postDetail[0].sampleCollectionDate);

  return loading ? <LoadingSpinner /> : (
    <AuthorLayout
      contentChilren={
        <form className="flex h-full flex-col w-full bg-[#ffffff] p-6 rounded mb-4">
          <FormHeader title="Chi tiết bài viết" />
          <FormInput
            id="science-name"
            label="Tên khoa học :"
            type="text"
            readOnly
            defaultValue={postDetail[0].scienceName}
          />
          <FormInput
            id="vietnamese-name"
            label="Tên tiếng việt :"
            type="text"
            readOnly
            defaultValue={postDetail[0].vietnameseName}
          />
          <FormInput
            id="local-name"
            label="Tên địa phương :"
            type="text"
            readOnly
            defaultValue={postDetail[0].localName}
          />
          <FormInput
            id="kingdom"
            label="Giới :"
            type="text"
            readOnly
            defaultValue={postDetail[0].kingdom}
          />
          <FormInput
            id="phylum"
            label="Ngành :"
            type="text"
            readOnly
            defaultValue={postDetail[0].phylum}
          />
          <FormInput
            id="class"
            label="Lớp :"
            type="text"
            readOnly
            defaultValue={postDetail[0].class}
          />
          <FormInput
            id="order"
            label="Bộ :"
            type="text"
            readOnly
            defaultValue={postDetail[0].order}
          />
          <FormInput
            id="family"
            label="Họ :"
            type="text"
            readOnly
            defaultValue={postDetail[0].family}
          />
          <div className="px-2 ">
            <label>Hình ảnh : </label>
            <div className="flex items-center">
              {
                postDetail[0].media.map(item =>
                  <img src={item.url} key={item._id} className="w-[200px] h-[200px] ml-[15px] " />
                )
              }
            </div>
          </div>
          <FormInput
            id="use-value"
            label="Giá trị sử dụng :"
            type="text"
            readOnly
            defaultValue={postDetail[0].useValue}
          />
          <FormInput
            id="conservation-status"
            label="Tình trạng bảo tồn theo IUCN :"
            type="text"
            readOnly
            defaultValue={postDetail[0].conservationStatus.iucn}
          />
          <FormInput
            id="redbook-status"
            label="Tình trạng bảo tồn theo sách đỏ Việt Nam :"
            type="text"
            readOnly
            defaultValue={postDetail[0].conservationStatus.redBook}
          />
          <FormInput
            id="CITES-status"
            label="Tình trạng bảo tồn theo CITES (40/2013/TT-BNNPTNT) :"
            type="text"
            readOnly
            defaultValue={postDetail[0].conservationStatus.cities}
          />
          <FormInput
            id="distribution"
            label="Phân bố :"
            type="text"
            readOnly
            defaultValue={postDetail[0].distribution}
          />
          {
            postDetail[0].coordinates.map(item => (
              <FormInput
                key={item._id}
                id="coordinates"
                label="Tọa độ:"
                type="text"
                readOnly
                defaultValue={item.coordinate}
              />
            ))
          }
          <FormInput
            id="specimen-condition"
            label="Tình trạng mẫu vật :"
            type="text"
            readOnly
            defaultValue={postDetail[0].distribution}
          />
          <FormInput
            id="habitat"
            label="Sinh cảnh :"
            type="text"
            readOnly
            defaultValue={postDetail[0].habitat}
          />
          <FormInput
            id="place"
            label="Địa điểm :"
            type="text"
            readOnly
            defaultValue={postDetail[0].place}
          />
          {/* <FormInput
            id="sample-collection-day"
            label="Ngày thu mẫu :"
            type="text"
            readOnly
            defaultValue={postDetail[0].sampleCollectionDate}
          /> */}
          <FormInput
            id="sample-collector"
            label="Người thu mẫu :"
            type="text"
            readOnly
            defaultValue="Nguyễn Quang Cường"
          />
          {
            user.permission === "researcher" ?
              <Link
                to="/post/manage"
                className="flex items-center justify-center py-4"
              >
                <button
                  type="submit"
                  className="text-white rounded-full px-6 py-2 bg-blue-700 inline-block w-[150px]"
                >
                  Trở về
                </button>
              </Link> :
              <div className="flex items-center justify-center">
                <button
                type="button"
                className="text-white rounded-full px-6 py-2 bg-blue-700 inline-block w-[150px]"
                onClick={() => handleUpdateStatusPost(postDetail[0]._id)}
              >
                Duyệt
              </button>
              </div>
          }
        </form>
      }
    />
  );
};
export default PostDetail;
