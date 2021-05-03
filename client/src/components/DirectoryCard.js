import React from "react";
import { Link } from "react-router-dom";
import "./styles/DirectoryCard.css";

const DirectoryCard = ({ data, posts }) => {
  const photo = posts.filter((res) => res.albumName === data);

  return (
    <div>
      <div className="directory-card">
        <h5 className="card-title">{data}</h5>{" "}
        <img className="card-img-top" src={photo[0].selectedFile} alt="directory" />
        <div className="card-body"></div>
      </div>
      <div className="directory-buttons">
        <Link
          to={"/gallery/" + data}
          target="blank"
          className="btn btn-sm btn-secondary link"
        >
          View Gallery
        </Link>
      </div>
    </div>
  );
};

export default DirectoryCard;
