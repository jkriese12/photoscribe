import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_POST } from "../utils/actions";

  const Gallery = props => {
  const [state, dispatch] = useStoreContext();

    // useEffect(() => {
    //   API.getPost(props.match.params.id)
    //     .then(res => dispatch({ type: SET_CURRENT_POST, post: res.data }))
    //     .catch(err => console.log(err));
    // }, []);

    // const addGalleryData = () => {
    //   dispatch({
    //     type: ADD_GALLERY_DATA,
    //     post: state.currentPost
    //   });
    // };

    return (
      <div>
         {state.currentPost ? (
           <Container fluid>
            <Row>
              <Col size="md-12">
                <h1>
                  {state.currentPost.galleryName}
                </h1>
              </Col>
            </Row>
            <Row>
              <Col size="md-4">
                <div className="col-4 mt-3">
                  <div className="card">
                    <div className="card-horizontal">
                      <div className="img-square-wrapper">
                        <img className="" src={state.currentPost.photo} alt="photo gallery image" /> 
                      </div>
                      <div className="card-body">
                      <p className="card-text">
                        {state.currentPost.dateTaken},
                        {state.currentPost.photoLocation},
                        {state.currentPost.synopsis},
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col size="md-4">
                <div className="col-4 mt-3">
                  <div className="card">
                    <div className="card-horizontal">
                      <div className="img-square-wrapper">
                        <img className="" src={state.currentPost.photo} alt="photo gallery image" /> 
                      </div>
                      <div className="card-body">
                      <p className="card-text">
                        {state.currentPost.dateTaken},
                        {state.currentPost.photoLocation},
                        {state.currentPost.synopsis},
                      </p>
                    </div>
                  </div>
                </div> 
              </Col>
              <Col siz="md-4">
                <div className="col-4 mt-3">
                  <div className="card">
                    <div className="card-horizontal">
                      <div className="img-square-wrapper">
                        <img className="" src={state.currentPost.photo} alt="photo gallery image" /> 
                      </div>
                      <div className="card-body">
                      <p className="card-text">
                        {state.currentPost.dateTaken},
                        {state.currentPost.photoLocation},
                        {state.currentPost.synopsis},
                      </p>
                    </div>
                  </div>
                </div>
              </Col> 
            </Row> 
          </div>
      )}
   ); 
  } 
  
  export default Gallery;