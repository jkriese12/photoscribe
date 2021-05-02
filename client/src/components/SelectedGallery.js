import React from "react";
import { Link } from "react-router-dom";
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


export default SelectedGallery;
