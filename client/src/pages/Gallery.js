import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import "./styles/Gallery.css";
import GalleryCardTemplate from "../components/GalleryCardTemplate";
import Logout from "../components/Logout";
import { FaBackward, FaTh, FaRegEnvelope } from "react-icons/fa";
import Wrapper from "../components/Wrapper";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostsGallery } from "../actions/posts";
import { useDispatch } from "react-redux";

const Gallery = () => {
  const dispatch = useDispatch();
  const { albumName } = useParams();
  useEffect(() => {
    dispatch(getPostsGallery(albumName));
  }, [albumName, dispatch]);

  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <Container className="selectedGallery">
      <Wrapper className="header-wrapper">
        <Row className="gallery-buttons small">
          <div className="back-to-work">
            <Link to="/scribe" className="link">
              <FaBackward size="1em" color="#6c757d" /> Scribe New Photo
            </Link>
          </div>
          <div className="back-to-work">
            <Link to="/directory" target="blank" className="link">
              View Directory <FaTh size="1em" color="#6c757d" />
            </Link>
          </div>
          <div className="send-email text-secondary">
            <Link to={"/email/" + albumName} className="link">
              Share Your Gallery <FaRegEnvelope size="1em" color="#6c757d" />
            </Link>
          </div> 
          <Logout />
        </Row>   
        <Row className="gallery-name">
          <h1 className="gallery-title">{albumName}</h1>
        </Row>
      </Wrapper> 
      <Wrapper className="image-wrapper">
        <Row className="galImages">
          {posts.map((data) => (
            <GalleryCardTemplate key={data._id} data={data} />
          ))}
        </Row>
      </Wrapper>
    </Container>
  );
};

export default Gallery;
