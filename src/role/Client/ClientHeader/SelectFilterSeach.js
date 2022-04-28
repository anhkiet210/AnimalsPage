import React from "react";
import { FilterIcon } from "@heroicons/react/outline";

const SELECT_OPTIONS = [
  { name: "Tên Khoa Học", value: "scienceName" },
  { name: "Tên Tiếng Việt", value: "vietnameseName" },
  { name: "Tên Địa Phương", value: "localName" },
];
function SelectFilterSeach({ handleSelectChange }) {
  return (
    <div className="absolute top-2 left-0 ">
      <FilterIcon className="w-4 h-4 absolute left-2 top-1" />
      <select
        className="outline-none bg-transparent text-sm relative pl-[30%]"
        onChange={handleSelectChange}
      >
        {SELECT_OPTIONS.map((option) => (
          <option value={option.value} key={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectFilterSeach;
