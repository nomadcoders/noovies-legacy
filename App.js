import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";
import Stack from "./navigation/Stack";

const cacheImages = images =>
  images.map(image => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const cacheFonts = fonts =>
  fonts.map(font => [Font.loadAsync(font), Font.loadAsync(font)]);

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1562887189-e5d078343de4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      require("./assets/splash.png")
    ]);
    const fonts = cacheFonts([Ionicons.font]);
    return Promise.all([...images, ...fonts]);
  };
  const onFinish = () => setIsReady(true);
  return isReady ? (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}
