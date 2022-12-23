import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import Toast from "react-native-toast-message";
const height = Dimensions.get("screen").height;
import axios from "axios";
import { useToast } from "react-native-toast-notifications";
// import { addUser } from "../services/api";
import { URL } from "../services/api";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required").label("Name"),
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
  confirmPassword: Yup.string()
    .label("confirm password")
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const Singupp = () => {
  const navigation = useNavigation();
  const toast = useToast();
  return (
    <View style={style.container}>
      <Text style={style.head}>Welcome Onboard!</Text>
      <Text style={style.para}>Let’s help you meet up your task</Text>
      <View style={style.form}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(value) => {
            console.log("clicked");

            navigation.navigate("loginn");
            axios
              .post(`${URL}/adduser`, value)
              .then((res) => {
                if (res.status == 201) {
                  toast.show("Registration Successful.", {
                    type: "success",
                    placement: "top",
                    duration: 4000,
                    offset: 60,
                    animationType: "slide-in",
                  });
                  setTimeout(() => {
                    navigation.navigate("loginn");
                  }, 2000);
                }
              })
              .catch((error) => {
                alert("User already exit please login");
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
            <View>
              <TextInput
                placeholder="Enter your name"
                style={style.inputhnd}
                name="name"
                value={values.name}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
              />
              {errors.name && touched.name && (
                <Text style={{ color: "red" }}>{errors.name}</Text>
              )}
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
                placeholder="Create a Password"
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
              <TextInput
                placeholder="Confirm Your Password"
                onBlur={handleBlur("confirmPassword")}
                onChangeText={handleChange("confirmPassword")}
                style={style.inputhnd}
                name="confirmPassword "
                value={values.confirmPassword}
                secureTextEntry
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <Text style={{ color: "red" }}>{errors.confirmPassword}</Text>
              )}

              <Text style={style.btn} onPress={handleSubmit}>
                Sing Up
              </Text>
            </View>
          )}
        </Formik>
      </View>
      <View style={style.singIn}>
        <Text>Already have an account ? </Text>
        <Text style={style.end} onPress={() => navigation.navigate("loginn")}>
          Sign In
        </Text>
      </View>
    </View>
  );
};

export default Singupp;

const style = StyleSheet.create({
  container: {
    width: "85%",
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
  },
  head: {
    top: 75,
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 30,
  },
  para: {
    width: 200,
    top: 90,
    fontSize: 13,
    lineHeight: 19,
    color: "#55847AF7",
  },
  form: {
    width: "100%",
    height: height * 0.5,
    top: 120,
  },
  inputhnd: {
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#fff",
    height: 40,
    marginBottom: 3,
    paddingHorizontal: 8,
    borderColor: "#ffff",
  },
  btn: {
    width: 200,
    backgroundColor: "#55847A",
    color: "#fff",
    alignSelf: "center",
    borderRadius: 3,
    padding: 12,
    textAlign: "center",
    top: 50,
    fontWeight: "500",
    fontSize: 18,
  },
  singIn: {
    flexDirection: "row",
    top: 130,
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 22,
  },
  end: {
    color: "#000f45",
    fontWeight: "600",
  },
});
