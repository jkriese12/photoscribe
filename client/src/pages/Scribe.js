import React, { useState } from "react";
import Container from "../components/Container";
import Cropper from "react-cropper";
import Row from "../components/Row";
import CreateGalleryListForm from "../components/CreateGalleryListForm";
import GalleryList from "../components/GalleryList";
import ImageCropper from "../components/ImageCropper";
import GalleryCardText from "../components/GalleryCardText";
import SelectedGallery from "../components/SelectedGallery";
import ScribeGalleryCard from "../components/ScribeGalleryCard";
import "./styles/Scribe.css";

const Scribe = () => {
  const [details, setDetails] = useState({
    dateTaken: "",
    photoLocation: "",
    synopsis: "",
    albumName: "",
    selectedFile: "",
  });
  const defaultSrc =
    "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";
  const [image, setImage] = useState(defaultSrc);
  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState("");
  return (
    <Container className="scribe-page">
      <Row className="scribe-page-instructions">
        <h7>
          <b>How to Use PhotoScribe:</b>
          <ol>
            <li>
              Select an image. Crop image as desired then "add" image to the Gallery Card
              View.{" "}
            </li>
            <li>
              Create a galley for your photo or select a gallery name from previously
              created galleries in your gallery list.
            </li>
            <li>
              Enter details of your photo then "add" details to the Gallery Card View.
            </li>
            <li>
              When ready, "add" your completed gallery card to the selected gallery.
            </li>
            <li>
              Options to delete, print to PDF or email a link to your gallery are on the
              Gallery Page.
            </li>
          </ol>
        </h7>
      </Row>
      <Row className="scribe-page-create-crop">
        <div className="scribe-page-crop">
          <ImageCropper
            image={image}
            setImage={setImage}
            cropData={cropData}
            setCropData={setCropData}
            cropper={cropper}
            setCropper={setCropper}
            defaultSrc={defaultSrc}
          />
        </div>
        <div className="scribe-page-create">
          <CreateGalleryListForm />
          <GalleryList />
          <GalleryCardText details={details} setDetails={setDetails} />
        </div>
      </Row>
      <Row>
        <hr />
      </Row>
      <Row className="scribe-page-select-card">
        <div className="scribe-page-select-gallery">
          <SelectedGallery />
        </div>
        <div className="scribe-page-card-label">
          <h6>Gallery Card View</h6>
        </div>
        <div className="scribe-page-card">
          <ScribeGalleryCard details={details} cropData={cropData} />
        </div>
      </Row>
    </Container>
  );
};

export default Scribe;
