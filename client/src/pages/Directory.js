import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPosts } from "../actions/posts";
import { useDispatch } from "react-redux";
import Container from "../components/Container";
import Row from "../components/Row";
import { FaBackward } from "react-icons/fa";
import Logout from "../components/Logout";
import Wrapper from "../components/Wrapper";
import DirectoryCard from "../components/DirectoryCard";
import "./styles/Directory.css";

const Directory = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const posts = useSelector((state) => state.posts);
  const unique = [...new Set(posts.map((a) => a.albumName))];

  return (
    <Container className="directory">
      <Wrapper className="wrapper">
        <Logout />
        <div className="directory-buttons small">
          <div className="back-to-work">
            <Link to="/" className="link">
              <FaBackward size="1em" color="#6c757d" /> Scribe New Photo
            </Link>
          </div>
        </div>
        <Row>
          <h2 className="directory-title">Directory</h2>
        </Row>
      </Wrapper>
      <Row className="dirImages">
        {unique.map((data) => (
          <DirectoryCard key={data} data={data} posts={posts} />
        ))}
      </Row>
    </Container>
  );
};

export default Directory;
