import React from "react";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import Col from "../components/Col";
import Row from "../components/Row";
import CreateGalleryList from "../components/CreateGalleryList"
import GalleryList from "../components/GalleryList";
import ImageCropper from "../components/ImageCropper";
import GalleryCardText from "../components/GalleryCardText"; 
import SelectedGallery from "../components/SelectedGallery";
import GalleryCardTemplate from "../components/GalleryCardTemplate";
import Logout from "../components/Logout"; 
import "./styles/Scribe.css";

const Scribe = () => {
  return (   
      
      <Container className="scribe-page">
        <Logout />
        <Wrapper className="scribe-upper">
          <Col size="col-7" className="scribe-left">
            <Row className="scribe-instructions">
              <h6><b>Instructions:</b></h6>
              <Col>
                <ol>
                  <li>Mouse scroll zooms image; single click controls the cropper; double click to move image.</li>
                  <li>Select an image. Crop image as desired. Cropping sends the image to Gallery Card View.</li>
                  <li>Create a gallery or select a gallery name from previously created ones in your gallery list.<br/> 
                      Note: A gallery is not fully created until it contains at least one gallery card.</li>
                  <li>Enter details of your photo. Text automatically appears in the Gallery Card View.</li>
                  <li>Scroll down to view. When ready, "send" your completed card to the selected gallery.</li>
                  <li>Options to delete a card or email a link to your gallery are on the Gallery page.</li>
                </ol>
              </Col>
            </Row> 
            <Row className="scribe-create-crop"> 
              <div className="scribe-crop">
                <ImageCropper />
              </div>
            </Row> 
          </Col>
          <Col className="scribe-right">
            <div className="scribe-create">
              <CreateGalleryList /> 
              <GalleryList />
              <GalleryCardText />
            </div>   
          </Col> 
        </Wrapper>
        <Row>
          <hr/>
        </Row>
        <Row className="scribe-select-card">
          <div className="scribe-select-gallery">
             <SelectedGallery />
         </div>
           <div className="scribe-card-header">
             <h5>Gallery Card View</h5>
           </div>    
           <div className="scribe-card">
             <GalleryCardTemplate />
           </div>
         </Row>
      </Container>
  );
};

export default Scribe;
