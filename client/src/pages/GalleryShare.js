import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import Button from "../components/Button";
import "./styles/GalleryShare.css";
import GalleryCardTemplateShare from "../components/GalleryCardTemplateShare";
import Wrapper from "../components/Wrapper";
import tryitnow from "../components/Images/try-it-now2.jpg";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostsGalleryNoAuth } from "../actions/posts";
import { useDispatch } from "react-redux";

const GalleryShare = () => {
  const dispatch = useDispatch();
  const { id, albumName } = useParams();
  useEffect(() => {
    dispatch(getPostsGalleryNoAuth(id, albumName));
  }, [id, albumName, dispatch]);

  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <Container className="selectedGallery">
      <Wrapper className="wrapper">
        <Row>
          <h1 className="gallery-title">{albumName}</h1>
        </Row>
      </Wrapper>
      <Row className="galImages">
        {posts.map((data) => (
          <GalleryCardTemplateShare key={data._id} data={data} />
        ))}
      </Row>
      <h4 className="signUp">Ready to create your own memories?</h4>
      <Link to="/signup">
        <Button className="landing-button">
           <img src={tryitnow} alt="try it" />
        </Button>
      </Link>
    </Container>
  );
};

export default GalleryShare;
