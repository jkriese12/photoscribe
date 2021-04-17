import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

const GalleryCard = (props) => {
    return (
        <Card style={{ height: "" , width: "" }}>
            <Row className='no-gutters'>
                <Col md={7} lg={7}  >
                    <Card.Img src={props.image} /> 
                </Col>
                <Col>
                <Card.Body>
                    <Card.Text />
                </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

export default GalleryCard;

