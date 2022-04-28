import { useState } from "react";
import AuthorLayout from "./AuthorLayout";
import FormInput from "../../../components/Form/FormInput";
import FormHeader from "../../../components/Form/FormHeader";
import { UploadIcon } from "@heroicons/react/outline";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";

const NewPost = () => {

  const currentUser = useSelector((state) => state.user.currentUser);
  const [loading, setLoading] = useState(false)
  const [scienceName, setScienceName] = useState("");
  const [vietnameseName, setVietnameseName] = useState("");
  const [localName, setLocalName] = useState("");
  const [kingdom, setKingdom] = useState("");
  const [phylum, setPhylum] = useState("");
  const [Class, setClass] = useState("");
  const [order, setOrder] = useState("");
  const [family, setFamily] = useState("");
  const [images, setImages] = useState();
  const [morphologicalCharacteristics, setMorphologicalCharacteristics] =
    useState("");
  const [ecologicalCharacteristics, setEcologicalCharacteristics] =
    useState("");
  const [useValue, setUseValue] = useState("");
  const [IUCN, setIUCN] = useState("");
  const [redbookStatus, setRedbookState] = useState("");
  const [decree32, setDecree32] = useState("");
  const [CITESStatus, setCITESStatus] = useState("");
  const [distribution, setDistribution] = useState();
  const [specimenCondition, setSpecimenCondition] = useState("");
  const [habitat, setHabitat] = useState("");
  const [place, setPlace] = useState("");
  const [sampleCollectionDay, setSampleCollectionDay] = useState();
  const [coordinate1, setCoordinate1] = useState("");
  const [coordinate2, setCoordinate2] = useState("");
  const [coordinate3, setCoordinate3] = useState("");
  const [coordinate4, setCoordinate4] = useState("");
  const [coordinate5, setCoordinate5] = useState("");
  const userId = currentUser.data.user._id;

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const conservationStatus = {
      iucn: IUCN,
      redBook: redbookStatus,
      decree32: decree32,
      cities: CITESStatus,
    };
    const coordinates = [
      coordinate1,
      coordinate2,
      coordinate3,
      coordinate4,
      coordinate5,
    ];
    let postCoordinates = [];
    for (let i = 0; i < coordinates.length; i++) {
      if (coordinates[i].trim().length !== 0) {
        postCoordinates.push(coordinates[i]);
      }
    }
    const formData = new FormData();
    for (let i = 0; i < images.length; i++) {
      formData.append("file", images[i]);
    }
    formData.append("scienceName", scienceName);
    formData.append("vietnameseName", vietnameseName);
    formData.append("localName", localName);
    formData.append("kingdom", kingdom);
    formData.append("phylum", phylum);
    formData.append("class", Class);
    formData.append("order", order);
    formData.append("family", family);
    formData.append("images", images);
    formData.append("ecologicalCharacteristics", ecologicalCharacteristics);
    formData.append(
      "morphologicalCharacteristics",
      morphologicalCharacteristics
    );
    formData.append("useValue", useValue);
    formData.append("conservationStatus", conservationStatus);

    formData.append("iucn", IUCN);
    formData.append("redBook", redbookStatus);
    formData.append("decree32", decree32);
    formData.append("cities", CITESStatus);

    formData.append("distribution", distribution);
    formData.append("coordinatesArray", postCoordinates);
    formData.append("specimenCondition", specimenCondition);
    formData.append("habitat", habitat);
    formData.append("place", place);
    formData.append("sampleCollectionDay", sampleCollectionDay);
    formData.append("sampleCollector", userId);
    const config = {
      headers: {
        x_authorization: currentUser.data.accessToken,
      },
    };
    try {
      await axios.post("http://localhost:5000/api/animals", formData, config);
      toast("🦄 Congratulation! You just add one animal to our library!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return loading ? <LoadingSpinner /> : (
    <AuthorLayout
      contentChilren={
        <form
          className="flex h-full flex-col w-full bg-[#ffffff] p-6 rounded mb-4"
          onSubmit={handleSubmitForm}
        >
          <FormHeader title="Thêm bài viết" />
          <FormInput
            id="science-name"
            label="Tên khoa học :"
            type="text"
            onChange={(e) => {
              setScienceName(e.target.value);
            }}
          />
          <FormInput
            id="vietnamese-name"
            label="Tên tiếng việt :"
            type="text"
            onChange={(e) => {
              setVietnameseName(e.target.value);
            }}
          />
          <FormInput
            id="local-name"
            label="Tên địa phương :"
            type="text"
            onChange={(e) => {
              setLocalName(e.target.value);
            }}
          />
          <FormInput
            id="kingdom"
            label="Giới :"
            type="text"
            onChange={(e) => {
              setKingdom(e.target.value);
            }}
          />
          <FormInput
            id="division"
            label="Ngành :"
            type="text"
            onChange={(e) => {
              setPhylum(e.target.value);
            }}
          />
          <FormInput
            id="class"
            label="Lớp :"
            type="text"
            onChange={(e) => {
              setClass(e.target.value);
            }}
          />
          <FormInput
            id="order"
            label="Bộ :"
            type="text"
            onChange={(e) => {
              setOrder(e.target.value);
            }}
          />
          <FormInput
            id="family"
            label="Họ :"
            type="text"
            onChange={(e) => {
              setFamily(e.target.value);
            }}
          />
          <div className="px-2 ">
            <label>Hình ảnh : </label>
            <label
              htmlFor="image"
              className="flex text-[14px] px-6 py-2 rounded-lg cursor-pointer border border-blue-700 w-[150px] my-3 text-blue-700"
            >
              Upload Ảnh <UploadIcon className="ml-1 w-5 h-5" />
            </label>
            <input
              type="file"
              hidden
              id="image"
              multiple
              onChange={(e) => {
                setImages(e.target.files);
              }}
            />
          </div>

          <div className="form-input">
            <label htmlFor={morphologicalCharacteristics}>
              Đặc điểm hình thái :
            </label>
            <textarea
              id="morphologicalCharacteristics"
              onChange={(e) => {
                setMorphologicalCharacteristics(e.target.value);
              }}
            />
          </div>

          <div className="form-input">
            <label htmlFor={ecologicalCharacteristics}>
              Đặc điểm sinh thái :
            </label>
            <textarea
              id="ecologicalCharacteristics"
              onChange={(e) => {
                setEcologicalCharacteristics(e.target.value);
              }}
            />
          </div>
          <FormInput
            id="use-value"
            label="Giá trị sử dụng :"
            type="text"
            onChange={(e) => {
              setUseValue(e.target.value);
            }}
          />
          <FormInput
            id="conservation-status"
            label="Tình trạng bảo tồn theo IUCN :"
            type="text"
            onChange={(e) => {
              setIUCN(e.target.value);
            }}
          />
          <FormInput
            id="redbook-status"
            label="Tình trạng bảo tồn theo sách đỏ Việt Nam :"
            type="text"
            onChange={(e) => {
              setRedbookState(e.target.value);
            }}
          />
          <FormInput
            id="decree32"
            label="Tình trạng bảo tồn theo Nghị định 32 :"
            type="text"
            onChange={(e) => {
              setDecree32(e.target.value);
            }}
          />
          <FormInput
            id="CITES-status"
            label="Tình trạng bảo tồn theo CITES (40/2013/TT-BNNPTNT) :"
            type="text"
            onChange={(e) => {
              setCITESStatus(e.target.value);
            }}
          />
          <FormInput
            id="distribution"
            label="Phân bố :"
            type="text"
            onChange={(e) => {
              setDistribution(e.target.value);
            }}
          />
          <FormInput
            id="coordinate1"
            label="Tọa độ 1 :"
            type="text"
            onChange={(e) => {
              setCoordinate1(e.target.value);
            }}
          />
          <FormInput
            id="coordinate2"
            label="Tọa độ 2 :"
            type="text"
            onChange={(e) => {
              setCoordinate2(e.target.value);
            }}
          />
          <FormInput
            id="coordinate3"
            label="Tọa độ 3:"
            type="text"
            onChange={(e) => {
              setCoordinate3(e.target.value);
            }}
          />
          <FormInput
            id="coordinate4"
            label="Tọa độ 4:"
            type="text"
            onChange={(e) => {
              setCoordinate4(e.target.value);
            }}
          />
          <FormInput
            id="coordinate5"
            label="Tọa độ 5:"
            type="text"
            onChange={(e) => {
              setCoordinate5(e.target.value);
            }}
          />
          <FormInput
            id="specimen-condition"
            label="Tình trạng mẫu vật :"
            type="text"
            onChange={(e) => {
              setSpecimenCondition(e.target.value);
            }}
          />
          <FormInput
            id="habitat"
            label="Sinh cảnh :"
            type="text"
            onChange={(e) => {
              setHabitat(e.target.value);
            }}
          />
          <FormInput
            id="place"
            label="Địa điểm :"
            type="text"
            onChange={(e) => {
              setPlace(e.target.value);
            }}
          />
          {/* <FormInput
            id="sample-collection-day"
            label="Ngày thu mẫu :"
            type="text"
            onChange={(e) => {
              setSampleCollectionDay(e.target.value);
            }}
          /> */}
          <div className="flex items-center justify-center py-4">
            <button
              type="submit"
              className="text-white rounded-full px-6 py-2 bg-blue-700 inline-block w-[150px]"
            >
              Thêm
            </button>
          </div>
        </form>
      }
    />
  );
};
export default NewPost;
