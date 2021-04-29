import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import "./styles/Gallery.css";
import GalleryCardTemplate from "../components/GalleryCardTemplate";
import { TiArrowBack, TiArrowForward } from "react-icons/ti";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostsGallery, deletePhoto } from "../actions/posts";
import { useDispatch } from "react-redux";

const Gallery = () => {
  const dispatch = useDispatch();
  const { albumName } = useParams();
  useEffect(() => {
    dispatch(getPostsGallery(albumName));
  }, [dispatch]);
  const array = [];
  const posts = useSelector((state) => state.posts);
  function galleryMap(card) {
    const { dateTaken, photoLocation, synopsis, selectedFile } = card;
    return <GalleryCardTemplate {...card} />;
  }

  return (
    <Container className="selectedGallery">
      <div className="gallery-buttons">
        <div className="back-to-work">
          <Link to="/">
            <TiArrowBack size="2em" color="#007bff" />
            Back
          </Link>
        </div>
        <div className="back-to-work">
          <Link to="/">
            View Directory
            <TiArrowForward size="2em" color="#007bff" />
          </Link>
        </div>
      </div>

      <Row>
        <h1 className="gallery-title">{albumName}</h1>
      </Row>
      <Row className="galImages">
        {posts.map((data) => (
          <GalleryCardTemplate key={data._id} data={data} />
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
