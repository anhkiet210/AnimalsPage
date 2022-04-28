import React, { useState, useEffect } from "react";
import { SearchIcon, XIcon } from "@heroicons/react/outline";
import SelectFilterSeach from "./SelectFilterSeach";
import AnimalsApi from "../../../api/animalsApi";
import { Link } from "react-router-dom";
function SearchBar() {
  const [filterData, setFilterData] = useState([]);
  const [searchValue, setSeachValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("scienceName");
  const [animalData, setAnimalData] = useState([]);
  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await AnimalsApi.getAll();
        setAnimalData(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAnimals();
  }, []);
  const createHighLightText = (text, searchValue) => {
    const hightLighText = text.replace(
      new RegExp(searchValue, "gi"),
      (match) =>
        `<mark style="color : #6922fa;background : transparent;font-weight : bold">${match}</mark>`
    );
    return hightLighText;
  };
  const handleChange = (event) => {
    const searchWord = event.target.value;
    setSeachValue(searchWord);
    const highlightArr =
      animalData &&
      animalData.map((item) => {
        let name;
        let animalImages = item.media.slice(0, 1).map((media) => media.url);
        let animalId = item._id;
        if (
          item.scienceName.toLowerCase().includes(searchWord.toLowerCase()) &&
          selectedValue === "scienceName"
        ) {
          name = createHighLightText(item.scienceName, searchWord);
        } else if (
          item.vietnameseName
            .toLowerCase()
            .includes(searchWord.toLowerCase()) &&
          selectedValue === "vietnameseName"
        ) {
          name = createHighLightText(item.vietnameseName, searchWord);
        } else if (
          item.localName.toLowerCase().includes(searchWord.toLowerCase()) &&
          selectedValue === "localName"
        ) {
          name = createHighLightText(item.localName, searchWord);
        }
        return { animalId, name, image: animalImages };
      });
    if (searchWord.trim().length === 0) {
      setFilterData([]);
    } else {
      setFilterData(
        highlightArr.filter(
          (data) =>
            data.animalId !== undefined &&
            data.name !== undefined &&
            data.image !== undefined
        )
      );
    }
  };
  const handleSelectChange = (e) => {
    setFilterData([]);
    setSeachValue("");
    setSelectedValue(e.target.value);
  };
  const handleCloseSearchbar = () => {
    setFilterData([]);
    setSeachValue("");
  };
  return (
    <div className="relative w-[32vw] mt-2 text-black">
      <SelectFilterSeach handleSelectChange={handleSelectChange} />
      <input
        type="text"
        className="search-input"
        placeholder="Searching"
        onChange={handleChange}
        value={searchValue}
      />
      {searchValue.trim().length !== 0 ? (
        <XIcon className="search-icon" onClick={handleCloseSearchbar} />
      ) : (
        <SearchIcon className="search-icon" />
      )}
      {filterData.length !== 0 && (
        <div className="w-full h-auto max-h-80 overflow-hidden overflow-y-auto  bg-white shadow-sm text-sm absolute top-10 rounded-b no-scrollbar">
          {filterData.map((data, index) => (
            <Link
              to={`/explore/${data.animalId}`}
              key={index}
              className="flex items-center p-4 hover:bg-slate-300 cursor-pointer gap-2"
            >
              {data.image &&
                data.image.map((image) => (
                  <img
                    key={image}
                    src={image}
                    alt={image}
                    className="w-2/5 object-cover h-24"
                  />
                ))}
              <p
                className=" w-3/5"
                dangerouslySetInnerHTML={{ __html: data.name }}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
