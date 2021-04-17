import React from "react";
import Button from "react-bootstrap";
import Card from "react-bootstrap";
import Col from "react-bootstrap";
import Container from "react-bootstrap";
import Row from "react-bootstrap";


const Gallery = ({ gallery }) => {
    return (
        <div className="py-5 bg-light">
            <Container>
                <Row>
                    {gallery.map((item, key) => {
                        return (
                            <Col md="4" key={key}>
                                <Card className="mb-4 box-shadow">
                                    <Card.Img
                                        top
                                        width="100%"
                                        src={item.src}
                                        alt={item.altText}
                                    />
                                    <Card.Body>
                                        <Card.Text>{item.description}</Card.Text>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Button.Group>
                                                <Button
                                                    outline
                                                    color="secondary"
                                                    size="sm"
                                                >
                                                    View
                                                </Button>
                                                <Button
                                                    outline
                                                    color="secondary"
                                                    size="sm"
                                                >
                                                    Edit
                                                </Button>
                                            </Button.Group>
                                            <small className="text-muted">
                                                {item.time}
                                            </small>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default Gallery;