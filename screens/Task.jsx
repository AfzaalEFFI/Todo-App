import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import hero from "../assets/todo.png";

const Task = () => {
  return (
    <View style={style.main}>
      <Image source={hero} style={style.img} />

      <View style={style.botm}>
        <KeyboardAvoidingView>
          <TextInput placeholder="enter your nname"></TextInput>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default Task;

const style = StyleSheet.create({
  main: {
    backgroundColor: "#973",
    width: "100%",
    height: "100%",
  },
  top: {
    flex: 1,
    backgroundColor: "#987",
  },
  botm: {
    backgroundColor: "#324",
    flex: 1,
  },
  img: {
    resizeMode: "contain",
    width: 200,
    alignSelf: "center",
  },
});

