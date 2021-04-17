import React from "react";
import "./Card.css"

export const CardUI = (props) => {
    return (
        <div className="card text-center shadow">
            <div className="overflow">
               <img src={props.imgsrc} alt=""  className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem.  
                </p> 
                <div class="input-group mb-3">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Add to Gallery</button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#"></a></li>
                    <li><a class="dropdown-item" href="#"></a></li> 
                </ul>
                <input type="text" class="form-control" aria-label="Text input with dropdown button" />    
            </div>
            </div>
        </div>
            
     
    )
}
