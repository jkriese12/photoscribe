import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/posts";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import Col from "../components/Col";
import Row from "../components/Row";
import CreateGalleryList from "../components/CreateGalleryList";
import GalleryList from "../components/GalleryList";
import ImageCropper from "../components/ImageCropper";
import GalleryCardText from "../components/GalleryCardText";
import SelectedGallery from "../components/SelectedGallery";
import ScribeCardPreview from "../components/ScribeCardPreview";
import Logout from "../components/Logout";
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
  const reset = () => {
    setDetails({
      ...details,
      dateTaken: "",
      photoLocation: "",
      synopsis: "",
    });
    setImage(defaultSrc);
    setCropData("#");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      details.selectedFile === "" ||
      details.albumName === "" ||
      details.dateTaken === "" ||
      details.synopsis === "" ||
      details.photoLocation === ""
    ) {
      alert("Please fill in all required entries");
    } else {
      dispatch(createPost(details));
      reset();
    }
  };
  return (
    <Container className="scribe-page">
      <Logout />
      <Wrapper className="scribe-upper">
        <Col size="col-7" className="scribe-left">
          <Row className="scribe-instructions">
            <h6>
              <b>Instructions:</b>
            </h6>
            <Col>
              <ol>
                <li>
                  Mouse scroll zooms image; single click controls the cropper; double
                  click to move image.
                </li>
                <li>
                  Select an image. Crop image as desired. Cropping sends the image to
                  Gallery Card View.
                </li>
                <li>
                  Create a gallery or select a gallery name from previously created ones
                  in your gallery list.
                  <br />
                  Note: A gallery is not fully created until it contains at least one
                  gallery card.
                </li>
                <li>
                  Enter details of your photo. Text automatically appears in the Gallery
                  Card View.
                </li>
                <li>
                  Scroll down to view. When ready, "send" your completed card to the
                  selected gallery.
                </li>
                <li>
                  Options to delete a card or email a link to your gallery are on the
                  Gallery page.
                </li>
              </ol>
            </Col>
          </Row>
          <Row className="scribe-create-crop">
            <div className="scribe-crop">
              <ImageCropper
                image={image}
                setImage={setImage}
                setCropData={setCropData}
                cropper={cropper}
                setCropper={setCropper}
              />
            </div>
          </Row>
        </Col>
        <Col className="scribe-right">
          <div className="scribe-create">
            <CreateGalleryList />
            <GalleryList details={details} setDetails={setDetails} />
            <GalleryCardText details={details} setDetails={setDetails} />
          </div>
        </Col>
      </Wrapper>
      <Row>
        <hr />
      </Row>
      <Row className="scribe-select-card">
        <div className="scribe-select-gallery">
          <SelectedGallery details={details} />
        </div>
        <div className="scribe-card-header">
          <h5>Gallery Card View</h5>
        </div>
        <div className="scribe-card">
          <ScribeCardPreview
            details={details}
            setDetails={setDetails}
            cropData={cropData}
            submitHandler={submitHandler}
            img={img}
            reset={reset}
          />
        </div>
      </Row>
    </Container>
  );
};

export default Scribe;
