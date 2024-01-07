import React from "react";
import { Text, StyleSheet, View } from "react-native";

const CustomComp = () => {
  const name = "Aditya Kumar";
  return (
    <View>
      <Text style={styles.txtT}>Getting started with React Native</Text>
      <Text style={styles.txtD}>{`My Name is ${name}`}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  txtT: {
    fontSize: 45,
  },
  txtD: {
    fontSize: 20,
  },
});
export default CustomComp;
