import React from "react";
import styled from "styled-components/native";
import Input from "../../components/Search/Input";
import HorizontalSlider from "../../components/HorizontalSlider";
import Horizontal from "../../components/Horizontal";

const Container = styled.ScrollView`
  background-color: black;
`;

export default ({ movies, shows, keyword, onChange, onSubmit }) => (
  <Container>
    <Input
      placeholder={"Write a keyword"}
      value={keyword}
      onChange={onChange}
      onSubmit={onSubmit}
    />
    <HorizontalSlider title={"Movie Results"}>
      {movies.map(movie => (
        <Horizontal />
      ))}
    </HorizontalSlider>
    <HorizontalSlider title={"TV Results"}>
      {shows.map(show => (
        <Horizontal />
      ))}
    </HorizontalSlider>
  </Container>
);
