import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        score={90}
        imgsrc={require("../../assets/forest.jpg")}
      />
      <ImageDetail
        title="Beach"
        score={10}
        imgsrc={require("../../assets/beach.jpg")}
      />
      <ImageDetail
        title="Mountain"
        score={20}
        imgsrc={require("../../assets/mountain.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default ImageScreen;
