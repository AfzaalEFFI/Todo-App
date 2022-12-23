import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import hero from "../assets/todo.png";
import { useNavigation } from "@react-navigation/native";
const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;
const Welcome = ({ navigation }) => {
  // const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Image source={hero} style={style.img} />
      <View style={style.content}>
        <Text style={style.heading}>Get things done with TODo</Text>
        <Text style={style.para}>
          Lorem ipsum dolor sit amet, consectetur adipisicing. Maxime, tempore!
          Animi nemo aut atque, deleniti nihil dolorem repellendus.
        </Text>
        <TouchableOpacity>
          <Text onPress={() => navigation.navigate("loginn")} style={style.btn}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const style = StyleSheet.create({
  container: {
    width: "auto",
    backgroundColor: "#EDEDED",
    flex: 1,
    alignItems: "center",
    margin: "auto",
  },
  img: {
    width: 300,
    height: 224,
    resizeMode: "contain",
    marginTop: 130,
  },
  heading: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: "500",
  },
  para: {
    width: 200,

    alignSelf: "center",
    marginTop: 30,
  },
  btn: {
    width: 200,
    backgroundColor: "#55847A",
    color: "#fff",
    alignSelf: "center",
    borderRadius: 3,
    padding: 12,
    textAlign: "center",
    marginTop: 35,
    fontWeight: "500",
    fontSize: 18,
  },
});
