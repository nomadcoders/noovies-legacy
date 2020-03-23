import React from "react";
import { View, Text } from "react-native";

export default ({
  navigation,
  route: {
    params: { id, title }
  }
}) => {
  navigation.setOptions({ title });
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};
