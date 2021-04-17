import React, { Component } from "react";
import Card from ".CardUI"; 

class Cards extends Component { 
    render() {
        return(
            <div className="container-fluid d-flex justify-content-left">
                <div className="row">
                    <div className="col-md-6"></div>
                    <Card imgsrc={item.src} title={}/>
                    <div className="col-md-6"></div>
                    <Card imgsrc={item.src} title={}/>
                </div>
            </div>
        )
    }


    constructor(props) {
        super(props);
        this.state = {};
    } 
    render() {
        return(

        )
    }
}

export default Cards;