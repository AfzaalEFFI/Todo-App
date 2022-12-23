import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  KeyboardAvoidingView,
  KeyboardAvoidingViewBase,
  ImageBackground,
  ScrollView,
} from "react-native";
import React from "react";
// import Login from "../assets/loginn.png";
import Login from "../assets/wellcome.png";

import { Formik } from "formik";
import * as Yup from "yup";

import axios from "axios";
import { URL } from "../services/api";
import Toast from "react-native-toast-message";
import { useToast } from "react-native-toast-notifications";
const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email is required")
    .label("Email"),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required")
    .label("Password"),
});

const Loginn = ({ navigation }) => {
  // const navigation = useNavigation();
  const toast = useToast();
  return (
    <KeyboardAvoidingView style={style.container}>
      <View style={style.imgContainer}>
        <Text style={style.Wtext}>Wellcome back</Text>
        <Image source={Login} style={style.loginImg}></Image>
      </View>
      <View style={style.login}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(value) => {
            console.log("clicked");
            axios
              .post(`${URL}/login`, value)
              .then(async (response) => {
                const dataa = response.data.userdata._id;
                if (response.status == 201) {
                  toast.show(" Login Successful", {
                    type: "success",
                    placement: "top",
                    duration: 4000,
                    offset: 60,
                    animationType: "slide-in",
                  });
                  setTimeout(() => {
                    navigation.navigate("todo", { user: dataa });
                  }, 1000);
                }
              })
              .catch((error) => {
                alert(" Invalid credentials");
              });
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <KeyboardAvoidingView
              behavior="position"
              style={style.loginContainer}
            >
              <View style={style.textIn}>
                <TextInput
                  placeholder="Enter your Email address"
                  style={style.inputhnd}
                  name="email"
                  onBlur={handleBlur("email")}
                  onChangeText={handleChange("email")}
                  value={values.email}
                />

                {errors.email && touched.email && (
                  <Text style={{ color: "red" }}>{errors.email}</Text>
                )}
                <TextInput
                  placeholder="Enter your password"
                  onBlur={handleBlur("password")}
                  onChangeText={handleChange("password")}
                  value={values.password}
                  style={style.inputhnd}
                  name="password"
                  secureTextEntry
                />

                {errors.password && touched.password && (
                  <Text style={{ color: "red" }}>{errors.password}</Text>
                )}
                <Text style={style.passward}>Forgot Password ?</Text>
                <TouchableOpacity>
                  <Text style={style.btn} onPress={handleSubmit}>
                    Sing Up
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          )}
        </Formik>
        <View style={style.singIn}>
          <Text>Dont have an account ?</Text>
          <Text onPress={() => navigation.navigate("singup")} style={style.end}>
            Sign Up
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Loginn;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEDED",
    alignSelf: "center",
  },
  imgContainer: {
    // backgroundColor: "#475",
    marginTop: 40,
  },
  Wtext: {
    fontSize: 20,
    fontWeight: "500",
    alignSelf: "center",
    top: 30,
    lineHeight: 40,
  },
  loginImg: {
    width: width * 0.93,
    height: height * 0.25,
    resizeMode: "contain",
    top: 40,
    alignSelf: "center",
  },
  login: {
    flex: 2,
    // backgroundColor: "#940",
    alignItems: "center",
  },
  loginContainer: {
    width: "100%",
    paddingVertical: 50,
    overflow: "hidden",
    // backgroundColor: "#9293",
  },
  textIn: {
    width: width * 0.9,
    alignSelf: "center",
    // backgroundColor: "#d94812",
  },
  inputhnd: {
    width: "100%",
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    height: 40,
    marginBottom: 3,
    paddingHorizontal: 8,
    borderColor: "#ffff",
  },
  passward: {
    fontWeight: "500",
    fontSize: 13,
    color: "#55847A",
    marginTop: 20,
  },
  btn: {
    width: 230,
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
  singIn: {
    flexDirection: "row",
    top: 10,
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 22,
  },
  end: {
    color: "#000f45",
    fontWeight: "600",
  },
});
