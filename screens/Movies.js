import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { movieApi } from "../api";

export default () => {
  const getData = async () => {
    const [nowPlaying, error] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Text>Movies</Text>
    </View>
  );
};
