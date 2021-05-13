import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import Button from "../components/Button";
import GalleryCardTemplateShare from "../components/GalleryCardTemplateShare";
import Wrapper from "../components/Wrapper";
import tryitnow from "../components/Images/try-ps-now.png"; 
import { FaTh } from "react-icons/fa";
import Logout from "../components/Logout";
import "./styles/GalleryShare.css";
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
    <Container className="shareGallery">
      <Wrapper className="header-wrapper"> 
        <Row className="nav-links small"> 
          <Logout /> 
        </Row>
        <Row>
          <h1 className="gallery-title">{albumName}</h1>
        </Row>
      </Wrapper> 
      <Wrapper className="cards-wrapper"> 
        <Row className="galleryCards">
          {posts.map((data) => (
            <GalleryCardTemplateShare key={data._id} data={data} />
          ))}
        </Row>
        <h6 className="signUp">Ready to create your own albums to share?</h6>
        <Link to="/signup">
          <Button className="landing-button">
            <img src={tryitnow} alt="try it" />
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default GalleryShare;
