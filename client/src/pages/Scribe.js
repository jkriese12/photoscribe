import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/posts";
import Container from "../components/Container";
import Row from "../components/Row";
import CreateGalleryListForm from "../components/CreateGalleryListForm";
import GalleryList from "../components/GalleryList";
import ImageCropper from "../components/ImageCropper";
import GalleryCardText from "../components/GalleryCardText";
import SelectedGallery from "../components/SelectedGallery";
import ScribeGalleryCard from "../components/ScribeGalleryCard";
import "./styles/Scribe.css";

const Scribe = () => {
  // State for card that will be displayed as preview and sent to the database
  const [details, setDetails] = useState({
    dateTaken: "",
    photoLocation: "",
    synopsis: "",
    albumName: "",
    selectedFile: "",
  });
  // Default picture and state for cropped image that will be displayed on the page
  const defaultSrc =
    "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";
  const [image, setImage] = useState(defaultSrc);
  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState("");
  const img = document.getElementById("test");
  // Submit button to post the card to the database linked to the specific user that is logged in
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (details.selectedFile === "") {
      alert("Please select a photo first");
    } else if (details.albumName === "") {
      alert("Please select a gallery first");
    } else {
      dispatch(createPost(details));
    }
  };

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
          />
        </div>
        <div className="scribe-page-create">
          <CreateGalleryListForm />
          <GalleryList details={details} setDetails={setDetails} />
          <GalleryCardText details={details} setDetails={setDetails} />
        </div>
      </Row>
      <Row>
        <hr />
      </Row>
      <Row className="scribe-page-select-card">
        <div className="scribe-page-select-gallery">
          <SelectedGallery details={details} />
        </div>
        <div className="scribe-page-card-label">
          <h6>Gallery Card View</h6>
        </div>
        <div className="scribe-page-card">
          <ScribeGalleryCard
            details={details}
            setDetails={setDetails}
            cropData={cropData}
            submitHandler={submitHandler}
            img={img}
            defaultSrc={defaultSrc}
            setImage={setImage}
            setCropData={setCropData}
          />
        </div>
      </Row>
    </Container>
  );
};

export default Scribe;
