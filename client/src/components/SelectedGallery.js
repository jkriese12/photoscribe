import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/posts";
import "./styles/SelectedGallery.css";

const SelectedGallery = ({ details }) => {
            
    return (     
        <form className="selected-gallery form-inline">
            <button
                type="submit"
                // onClick={props.handleFormSubmit}
                className="btn btn-sm btn-secondary"
            >
                View
            </button>
            <div className="form-group">
                <label htmlFor="selected-gallery-name">
                    &nbsp;Selected Gallery: {}
                </label>
                <br />
                <data type="name" />
            </div>
                <br />
            
            </form> 
            );
          }
          

        export default SelectedGallery;

