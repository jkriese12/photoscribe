import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/posts";
import "./styles/SelectedGallery.css";

const SelectedGallery = ({ details }) => {
            
    return (     
        <form className="selected-gallery">
            <div className="form-group">
                <label htmlFor="selected-gallery-name">
                    Selected Gallery: {}
                </label>
                <br />
                <text type="name" />
            </div>
                <br />
            <button
                type="submit"
                // onClick={props.handleFormSubmit}
                className="btn btn-sm btn-secondary"
            >
                View
            </button>
            </form> 
            );
          }
          

        export default SelectedGallery;

