import { useEffect, useState } from "react"
import AuthorLayout from "./AuthorLayout";
import FormInput from "../../../components/Form/FormInput";
import FormHeader from "../../../components/Form/FormHeader";
import { UploadIcon } from "@heroicons/react/outline";
import { useParams } from "react-router-dom";
import { getPostById } from "../CallAPI";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const UpdatePost = () => {
  const params = useParams()
  const currentUser = useSelector((state) => state.user.currentUser);

  const [loading, setLoading] = useState(false)
  const [postUpdate, setPostUpdate] = useState()
  const [scienceName, setScienceName] = useState("");
  const [vietnameseName, setVietnameseName] = useState("");
  const [localName, setLocalName] = useState("");
  const [kingdom, setKingdom] = useState("");
  const [phylum, setPhylum] = useState("");
  const [Class, setClass] = useState("");
  const [order, setOrder] = useState("");
  const [family, setFamily] = useState("");
  const [images, setImages] = useState();
  const [morphologicalCharacteristics, setMorphologicalCharacteristics] = useState("");
  const [ecologicalCharacteristics, setEcologicalCharacteristics] = useState("");
  const [useValue, setUseValue] = useState("");
  const [IUCN, setIUCN] = useState("");
  const [redbookStatus, setRedbookStatus] = useState("");
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

  useEffect(() => {
    getPostById(params.pid, setLoading, setPostUpdate)
  }, [])

  useEffect(() => {
    setScienceName(postUpdate?.scienceName)
    setVietnameseName(postUpdate?.vietnameseName)
    setLocalName(postUpdate?.localName)
    setKingdom(postUpdate?.kingdom)
    setPhylum(postUpdate?.phylum)
    setClass(postUpdate?.class)
    setOrder(postUpdate?.order)
    setFamily(postUpdate?.family)
    setImages(postUpdate?.media)
    setMorphologicalCharacteristics(postUpdate?.morphologicalCharacteristics)
    setEcologicalCharacteristics(postUpdate?.ecologicalCharacteristics)
    setUseValue(postUpdate?.useValue)
    setIUCN(postUpdate?.conservationStatus.iucn)
    setRedbookStatus(postUpdate?.conservationStatus.redBook)
    setDecree32(postUpdate?.conservationStatus.decree32)
    setCITESStatus(postUpdate?.conservationStatus.cities)
    setDistribution(postUpdate?.distribution)
    setSpecimenCondition(postUpdate?.specimenCondition)
    setHabitat(postUpdate?.habitat)
    setPlace(postUpdate?.place)
    setSampleCollectionDay(postUpdate?.sampleCollectionDay)
    setCoordinate1(postUpdate?.coordinates[0]?.coordinate)
    setCoordinate2(postUpdate?.coordinates[1]?.coordinate)
    setCoordinate3(postUpdate?.coordinates[2]?.coordinate)
    setCoordinate4(postUpdate?.coordinates[3]?.coordinate)
    setCoordinate5(postUpdate?.coordinates[4]?.coordinate)
  }, [postUpdate])

  // console.log(postUpdate?.coordinates);

  // console.log(scienceName);

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(e);
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
    const config = {
      headers: {
        x_authorization: currentUser.data.accessToken,
      },
    };
    try {
      await axios.post("http://localhost:5000/api/animals", formData, config);
      toast("???? Congratulation! You just add one animal to our library!", {
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
  }

  return loading ? <LoadingSpinner /> : (
    <AuthorLayout
      contentChilren={
        <form className="flex h-full flex-col w-full bg-[#ffffff] p-6 rounded mb-4" onSubmit={(e) => handleSubmit(e)} >
          <FormHeader title="C???p nh???t b??i vi???t" />
          <FormInput
            id="science-name"
            label="T??n khoa h???c :"
            type="text"
            value={scienceName}
            onChange={(e) => setScienceName(e.target.value)}
          />
          <FormInput
            id="vietnamese-name"
            label="T??n ti???ng vi???t :"
            type="text"
            value={vietnameseName}
            onChange={(e) => setVietnameseName(e.target.value)}
          />
          <FormInput
            id="local-name"
            label="T??n ?????a ph????ng :"
            type="text"
            value={localName}
            onChange={(e) => setLocalName(e.target.value)}
          />
          <FormInput
            id="kingdom"
            label="Gi???i :"
            type="text"
            value={kingdom}
            onChange={(e) => setKingdom(e.target.value)}
          />
          <FormInput
            id="phylum"
            label="Ng??nh :"
            type="text"
            value={phylum}
            onChange={(e) => setPhylum(e)}
          />
          <FormInput
            id="class"
            label="L???p :"
            type="text"
            value={Class}
            onChange={(e) => setClass(e.target.value)}
          />
          <FormInput
            id="order"
            label="B??? :"
            type="text"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          />
          <FormInput 
          id="family" 
          label="H??? :" 
          type="text" 
          value={family} 
          onChange={(e) => setFamily(e.target.value)}
          />
          <div className="px-2 ">
            <label>H??nh ???nh : </label>
            <input
              type="file"
              hidden
              id="image"
              multiple
              onChange={(e) => {
                setImages(e.target.files);
              }}
            />
            <div className="flex items-center">
              {
                images?.map(item =>
                  <img src={item.url} key={item._id} className="w-[200px] h-[200px] ml-[15px] " />
                )
              }
            </div>
          </div>
          <FormInput 
          id="use-value" 
          label="Gi?? tr??? s??? d???ng :" 
          type="text" 
          value={useValue}
          onChange={(e) => setUseValue(e.target.value)}
          />
          <FormInput
            id="conservation-status"
            label="T??nh tr???ng b???o t???n theo IUCN :"
            type="text"
            value={IUCN}
            onChange={(e) => setIUCN(e.target.value)}
          />
          <FormInput
            id="redbook-status"
            label="T??nh tr???ng b???o t???n theo s??ch ????? Vi???t Nam :"
            type="text"
            value={redbookStatus}
            onChange={(e) => setRedbookStatus(e.target.value)}
          />
          <FormInput
            id="CITES-status"
            label="T??nh tr???ng b???o t???n theo CITES (40/2013/TT-BNNPTNT) :"
            type="text"
            value={CITESStatus}
            onChange={(e) => setCITESStatus(e.target.value)}
          />
          <FormInput 
          id="distribution" 
          label="Ph??n b??? :" 
          type="text" 
          value={distribution}
          onChange={(e) => setDistribution(e.target.value)}
          />
          <FormInput 
          id="coordinates1" 
          label="T???a ?????:" 
          type="text" 
          value={coordinate1}
          onChange={(e) => setCoordinate1(e.target.value)}
          />
          <FormInput 
          id="coordinates2" 
          label="T???a ?????:" 
          type="text" 
          value={coordinate2}
          onChange={(e) => setCoordinate2(e.target.value)}
          />
          <FormInput 
          id="coordinates3" 
          label="T???a ?????:" 
          type="text" 
          value={coordinate3}
          onChange={(e) => setCoordinate3(e.target.value)}
          />
          <FormInput 
          id="coordinates4" 
          label="T???a ?????:" 
          type="text" 
          value={coordinate4}
          onChange={(e) => setCoordinate4(e.target.value)}
          />
          <FormInput 
          id="coordinates5" 
          label="T???a ?????:" 
          type="text" 
          value={coordinate5}
          onChange={(e) => setCoordinate5(e.target.value)}
          />
          <FormInput
            id="specimen-condition"
            label="T??nh tr???ng m???u v???t :"
            type="text"
            value={specimenCondition}
            onChange={(e) => setSpecimenCondition(e.target.value)}
          />
          <FormInput 
          id="habitat" 
          label="Sinh c???nh :" 
          type="text" 
          value={habitat}
          onChange={e => setHabitat(e.target.value)}
          />
          <FormInput 
          id="place" 
          label="?????a ??i???m :" 
          type="text" 
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          />
          {/* <FormInput
            id="sample-collection-day"
            label="Ng??y thu m???u :"
            type="date"
            value={new Date(sampleCollectionDay).toLocaleDateString()}
            onChange={(e) => setSampleCollectionDay(e.target.value)}
          /> */}
          <FormInput
            id="sample-collector"
            label="Ng?????i thu m???u :"
            type="text"
            value="Nguy???n Quang C?????ng"
            readOnly
          />
          <div className="flex items-center justify-center py-4">
            <button
              type="submit"
              className="text-white rounded-full px-6 py-2 bg-blue-700 inline-block w-[150px]"
            >
              S???a
            </button>
          </div>
        </form>
      }
    />
  );
};
export default UpdatePost;
