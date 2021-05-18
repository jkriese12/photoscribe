import React from "react";
import { Link } from "react-router-dom";
import "./styles/DirectoryCard.css";

const DirectoryCard = ({ data, posts }) => {
  const photo = posts.filter((res) => res.albumName === data);

  return (
    <div> 
      <div className="card directory-card">
        <h5 className="card-title">{data}</h5>{" "}
        <img className="card-img-top" src={photo[0].selectedFile} alt="directory" />
        <div className="card-body">
          <Link
            to={"/gallery/" + data}
            target="_blank"
            className="btn btn-light"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DirectoryCard;
