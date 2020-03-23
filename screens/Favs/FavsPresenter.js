import React from "react";
import { PanResponder, Dimensions } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../../api";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
`;

const Card = styled.View`
  top: 80px;
  height: ${HEIGHT / 1.5}px;
  width: 90%;
  position: absolute;
`;

const Poster = styled.Image`
  border-radius: 20px;
  width: 100%;
  height: 100%;
`;

export default ({ results }) => {
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, { dx }) => {
      console.log(dx);
    }
  });
  return (
    <Container>
      {results.reverse().map(result => (
        <Card key={result.id} {...panResponder.panHandlers}>
          <Poster source={{ uri: apiImage(result.poster_path) }} />
        </Card>
      ))}
    </Container>
  );
};
