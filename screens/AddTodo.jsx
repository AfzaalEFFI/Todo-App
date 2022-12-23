import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
  AsyncStorage,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import todo from "../assets/list.png";
import { useToast } from "react-native-toast-notifications";
import axios from "axios";
import { URL } from "../services/api";
import { useNavigation, useRoute } from "@react-navigation/native";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

const AddTodo = ({ navigation }) => {
  const toast = useToast();
  const route = useRoute();
  const [data, setdata] = useState("");
  const { user } = route.params;
  const _id = user;

  const ctahandler = async () => {
    // setdata("");
    // const date = {
    //   content: data,
    //   id: 1,
    // };
    const todolist = {
      data,
      _id,
    };

    axios
      .post(`${URL}/adddata`, todolist)
      .then((res) => {
        if (res.status === 201) {
          toast.show("Task Added ", {
            type: "success",
            placement: "top",
            duration: 4000,
            offset: 60,
            animationType: "slide-in",
          });
        }

        setTimeout(() => {
          navigation.navigate("taskManager", { _id: _id });
        }, 2000);
      })
      .catch((error) => {
        alert("task already exits ");
      });
  };

  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={style.container}>
        <Text style={style.welcome}>Welcome Onboard!</Text>
        <Image source={todo} style={style.InputImg} />

        <Text style={style.text}>Add What your want to do later on..</Text>

        <View>
          <View style={style.inputList}>
            <TextInput
              placeholder="Enter your Task"
              style={style.inputhnd}
              name="data"
              onChangeText={(val) => setdata(val)}
            />
          </View>
          <Text style={style.btn} onPress={ctahandler}>
            Add To List
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddTodo;

const style = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: "100%",

    alignSelf: "center",
  },
  onBoard: {
    flex: 1,

    alignItems: "center",
  },
  welcome: {
    // marginTop: 50,
    top: 80,
    alignSelf: "center",
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 30,
  },
  InputImg: {
    width: width * 0.6,
    height: height * 0.4,
    resizeMode: "contain",
    alignSelf: "center",
    top: 40,
  },
  // inputList: {
  //   flex: 1,
  //   alignItems: "center",
  //   backgroundColor: "#838",
  // },
  inputhnd: {
    width: "100%",
    // marginTop: 5,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "#F3F4F6",
    height: 40,
    paddingHorizontal: 8,
    borderColor: "#ffff",
    backgroundColor: "#fff",
  },
  text: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    color: "#55847AF7",
    alignSelf: "center",
    bottom: 20,
  },
  btn: {
    width: 240,
    backgroundColor: "#55847A",
    color: "#fff",
    alignSelf: "center",
    borderRadius: 3,
    padding: 12,
    textAlign: "center",
    top: 40,
    fontWeight: "500",
    fontSize: 18,
  },
});
