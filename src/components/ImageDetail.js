import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = (prop) => {
  return (
    <View>
      <Image source={prop.imgsrc} />
      <Text>{prop.title}</Text>
      <Text>{"Image score - " + prop.score}</Text>
    </View>
  );
};

export default ImageDetail;
