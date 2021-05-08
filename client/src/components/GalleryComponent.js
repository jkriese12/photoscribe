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
        
      </div> 
    ); 
  }; 
  
  export default Gallery;