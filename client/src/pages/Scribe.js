import React from "react";
import Container from "../components/Container";
import CreateGalleryListForm from "../components/CreateGalleryListForm";
import GalleryList from "../components/GalleryList";
import ImageCropper from "../components/ImageCropper";
import GalleryCardText from "../components/GalleryCardText";
import GalleryCardTemplate from "../components/GalleryCardTemplate";
import "./styles/Scribe.css";

const Scribe = () => {
  return (
    <div>
      <Container>
        <div className="row">
          <div className="col-3">
            <CreateGalleryListForm />
            <GalleryList />
          </div>
          <div className="col-9">
            <ImageCropper />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-5">
            <GalleryCardText />
          </div>
          <div className="col">
            <GalleryCardTemplate />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Scribe;
