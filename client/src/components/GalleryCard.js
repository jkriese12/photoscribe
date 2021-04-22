import React from 'react'

const GalleryCard = (props) => {
    return (  


        <div className="card"> 
            <div className="container">
                <div className="row">
                    <div className="col-4 mt-3">
                        <div className="card">
                            <div className="card-horizontal">
                                <div className="img-square-wrapper">
                                    <img className="" src={props.image} alt="photo gallery name" /> 
                                </div>
                                <div className="card-body">
        
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default GalleryCard;

