import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/posts";
import "./styles/SelectedGallery.css";
const SelectedGallery = (props) => {

    const [selectedGalleryName, setSelectedGalleryName] = useState({
        name: "",
    });

    // const dispatch = useDispatch();
    // const submitHandler = (e) => {
    //     e.preventDefault();

    //     dispatch(createPost(details));
    //   };

    return (

        <form className="selected-gallery form-group row">
            <label for="static selected-gallery-name" class="col-sm-2 col-form-label">Selected Gallery:</label>
                <div className="col-sm-8">
                <input type="text" readonly class="form-control-plaintext" id="static" 
                name=" "
                onClick={props.handleChange} /> 
           </div>
        </form>       
    );
}

export default SelectedGallery;

