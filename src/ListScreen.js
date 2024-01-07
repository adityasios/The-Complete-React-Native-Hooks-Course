import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const arrSrc = [
    { name: "First#1", age: "10", id: 1 },
    { name: "Sec#2", age: "20", id: 2 },
    { name: "Third#3", age: "30", id: 3 },
    { name: "F#3", age: "40", id: 4 },
  ];
  const rowComp = ({ item }) => {
    return (
      <Text style={{ textAlign: "left", color: "green", marginVertical: 8 }}>
        {"Name : " + item.name}&nbsp;{"| Age : " + item.age}
      </Text>
    );
  };
  const keyComp = (nameTmp) => nameTmp.id;
  return <FlatList keyExtractor={keyComp} data={arrSrc} renderItem={rowComp} />;
};

const styles = StyleSheet.create({});
export default ListScreen;
