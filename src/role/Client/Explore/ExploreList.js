import React from "react";
import { Link } from "react-router-dom";
function ExploreList(props) {
  const { _id, media, vietnameseName } = props.data;
  return (
    <li className="h-64 list-none flex items-center flex-col" key={_id}>
      <Link to={`/explore/${_id}`} className="w-full h-full">
        {media.slice(0, 1).map((data) => (
          <img
            src={data.url}
            alt=""
            className="w-full h-4/5 object-cover"
            key={data._id}
          />
        ))}
        <div className="h-1/5 text-center my-2">
          <span>{vietnameseName}</span>
        </div>
      </Link>
    </li>
  );
}

export default ExploreList;
