import React, { useState } from "react";
import "./styles/Modal.css";

const Modal = () => { 
    const [isOpen, setIsOpen] = useState({ isOpen: "false" }); 
   
    const handleShowModal = (data) => { 
        this.setState({ isOpen: !this.state.isOpen });
        console.log("clicked image")

    return (
        <div>
            <img
                className="galleryImage"
                src={data.selectedFile}
                onClick={this.handleShowModal}
                alt="modal no show"
                />
                {this.state.isOpen && (
                <modal
                    className="modal"
                    style={{ position: 'absolute' }}
                    open
                    onClick={this.handleShowModal}
                >
                    <img
                    className="modalImage"
                    src={data.selectedFile}
                    onClick={this.handleShowModal}
                    alt="modal no show"
                    />
                </modal>
        )}
      </div>
    )};
};
export default Modal;  

