import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const Input = ({ placeholder, setvalue, data }) => {
  return (
    <View>
      <TextInput style={style.inputConatainer} placeholder="enter your name" />
    </View>
  );
};

export default Input;

const style = StyleSheet.create({
  inputConatainer: {
    borderWidth: 1,
    marginTop: 20,
    alignContent: "center",
    borderRadius: 10,
    backgroundColor: "#FF00C7",
    padding: 10,
    overflow: "hidden",
  },
});
