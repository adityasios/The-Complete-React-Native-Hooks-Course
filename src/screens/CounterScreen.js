import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = () => {
  const name = "Aditya Kumar";
  return (
    <View>
      <Text style={styles.txtT}>Current Count : </Text>
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
export default CounterScreen;
