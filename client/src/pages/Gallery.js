import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import "./styles/Gallery.css";
import GalleryCardTemplate from "../components/GalleryCardTemplate";
import { FaBackward, FaTh, FaRegEnvelope } from "react-icons/fa";
import Logout from "../components/Logout";
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
      <Wrapper className="wrapper">
        <Logout />
        <div className="gallery-buttons small">
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
        </div>

        <div className="send-email small text-secondary">
          <Link to={"/email/" + albumName} className="link">
            Email Link <FaRegEnvelope size="1em" color="#6c757d" />
          </Link>
        </div>
        <Row className="gallery-name">
          <h1 className="gallery-title">{albumName}</h1>
        </Row>
      </Wrapper>
      <Row className="galImages">
        {posts.map((data) => (
          <GalleryCardTemplate key={data._id} data={data} />
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
