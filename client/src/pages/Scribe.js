import React from "react";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import Col from "../components/Col";
import Row from "../components/Row";
import CreateGalleryListForm from "../components/CreateGalleryListForm"
import GalleryList from "../components/GalleryList";
import ImageCropper from "../components/ImageCropper";
import GalleryCardText from "../components/GalleryCardText"; 
import SelectedGallery from "../components/SelectedGallery";
import GalleryCardTemplate from "../components/GalleryCardTemplate"; 
import "./styles/Scribe.css";

const Scribe = () => {
  return (   
      <Container className="scribe-page">
        <Wrapper className="scribe-upper">
          <Col size="col-7" className="scribe-left">
            <Row className="scribe-instructions">
              <h6><b>Instructions:</b>
              <ol>
                <li>Select an image. Crop image as desired then "crop image" to add photo to the Gallery Card View. </li>
                <li>Create a galley for your photo or select a gallery name from previously created galleries in your gallery list.</li>
                <li>Enter details of your photo then "add" details to the Gallery Card View.</li>
                <li>When ready, "add" your completed gallery card to the selected gallery.</li>
                <li>Options to delete, print to PDF or email a link to your gallery are on the Gallery Page.</li>
              </ol>
              </h6>
            </Row> 
            <Row className="scribe-create-crop"> 
              <div className="scribe-crop">
                <ImageCropper />
              </div>
            </Row> 
          </Col>
          <Col className="scribe-right">
            <div className="scribe-create">
              <CreateGalleryListForm /> 
              <GalleryList />
              <GalleryCardText />
            </div>   
          </Col> 
        </Wrapper>
        <Row>
          <hr/>
        </Row> 
        {/* // <Row className="scribe-select-card">
        //   <div className="scribe-select-gallery">
        //     <SelectedGallery />
        //   </div>
        //   <div className="scribe-card-label">
        //     <h6>Gallery Card View</h6>
        //   </div>          
        //   <div className="scribe-card">
        //     <GalleryCardTemplate />
        //   </div>
        // </Row> */}
      </Container>
 );
};

export default Scribe;
