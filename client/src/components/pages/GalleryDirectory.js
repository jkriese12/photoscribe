import React from 'react'

const GalleryDirectory = () => { 
    return (
        <div className="py-5 bg-light">
            <Container>
                <Row>
                    {gallery.map((item, key) => {
                        return (
                            <Col md="2" key={key}>
                                <Card className="mb-4 box-shadow">
                                    <Card.Img
                                        top
                                        width="100%"
                                        src={item.src}
                                        alt={item.altText}
                                    />
                                    
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
};
        

export default GalleryDirectory;
