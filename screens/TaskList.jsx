import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import img from "../assets/dp.png";
import axios from "axios";
import { URL } from "../services/api";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useStepState } from "react-native-redux";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useToast } from "react-native-toast-notifications";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;
const TaskManager = () => {
  const route = useRoute();
  const { _id } = route.params;
  const [daata, setdataa] = useState([]);
  const [name, setname] = useState("");
  const toast = useToast();
  const navigation = useNavigation();

  useEffect(() => {
    getlist();
  }, []);
  const getlist = async () => {
    try {
      const fetchData = await axios.get(`${URL}/list`, {
        headers: {
          _id: _id,
        },
      });
      setdataa(fetchData.data.data);
      setname(fetchData.data.userdata);
    } catch (error) {
      console.log(error);
    }
  };
  const ctaRemove = async (list) => {
    await axios
      .post(`${URL}/removelist`, { list, _id })
      .then(async (Response) => {
        if (Response.status === 201) {
          toast.show("Task deleted", {
            type: "success",
            placement: "top",
            duration: 4000,
            offset: 60,
            animationType: "slide-in",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    getlist();
  };

  return (
    <SafeAreaView style={style.mainContainer}>
      <View style={style.container}>
        <View style={style.header}>
          <Image source={img} style={style.dp} />
          <Text style={style.dpname}>Wellcome {name}</Text>
        </View>
        <View style={style.list}>
          <View style={style.listView}>
            <View style={style.listHeader}>
              <Text style={style.text}>Dairy Task</Text>
              <Entypo
                name="add-to-list"
                size={24}
                color="black"
                onPress={() => navigation.navigate("todo")}
              />
            </View>
            <View style={style.Listshow}>
              <ScrollView>
                {daata.map((list, index) => {
                  return (
                    <View key={index} style={style.fetchdata}>
                      <Text style={style.textT}>{list}</Text>
                      <View style={style.edit}>
                        <AntDesign
                          onPress={() => ctaRemove(list)}
                          name="delete"
                          size={24}
                          color="black"
                        />
                      </View>
                    </View>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TaskManager;

const style = StyleSheet.create({
  mainContainer: {
    width: "100%",
    backgroundColor: "#EDEDED",
  },
  container: {
    width: width * 0.9,
    height: "100%",

    alignSelf: "center",
  },
  header: {
    width: "100%",
    // backgroundColor: "#883",
    height: height * 0.4,
    alignItems: "center",
  },
  dp: {
    width: width * 0.5,
    height: height * 0.2,
    resizeMode: "contain",

    top: 30,
  },
  dpname: {
    fontSize: 20,
    fontWeight: "500",
    top: 25,
  },
  list: {
    width: "100%",
    height: height * 0.7,
    // backgroundColor: "#759",

    marginBottom: 10,
  },
  img: {
    width: width * 0.9,
    height: height * 0.22,

    resizeMode: "contain",
    alignSelf: "center",
  },
  listView: {
    height: height * 0.4,
    borderRadius: 13,
  },

  listHeader: {
    width: width * 0.8,
    alignSelf: "center",
    // backgroundColor: "#984",
    height: height * 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontWeight: "500",
    fontSize: 15,
  },
  Listshow: {
    backgroundColor: "#FFFFFF",

    width: "100%",
    height: height * 0.5,
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderStyle: "solid",
  },
  textT: {
    fontWeight: "500",
    alignSelf: "center",
    fontSize: 18,
    padding: 10,
  },
  fetchdata: {
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#0000",
    borderColor: "#7298",
  },
  edit: {
    flexDirection: "row",
    color: "#000",
  },
});
