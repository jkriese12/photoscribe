import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getPosts } from "../actions/posts";
import { useDispatch } from "react-redux";
import Container from "../components/Container";
import Row from "../components/Row";
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
    <Container>
      <Wrapper className="header-wrapper"> 
        <Row className="nav-link small">
          <Logout />  
        </Row>
        <Row>
          <h2 className="title">Directory</h2>
        </Row>
      </Wrapper> 
      <Wrapper className="cards-wrapper">
        <Row className="dirCards">
          {unique.map((data) => (
            <DirectoryCard key={data} data={data} posts={posts} />
          ))}
        </Row>
      </Wrapper>
    </Container>
  );
};

export default Directory;
