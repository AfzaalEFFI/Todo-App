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
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TextInput,
//   Button,
//   TouchableOpacity,
// } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Image style={styles.image} source={hero} />

//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Email."
//           placeholderTextColor="#003f5c"
//         />
//       </View>
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Password."
//           placeholderTextColor="#003f5c"
//           secureTextEntry={true}
//         />
//       </View>
//       <TouchableOpacity>
//         <Text style={styles.forgot_button}>Forgot Password?</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.loginBtn}>
//         <Text style={styles.loginText}>LOGIN</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   image: {
//     marginBottom: 40,
//   },
//   inputView: {
//     backgroundColor: "#FFC0CB",
//     borderRadius: 30,
//     width: "70%",
//     height: 45,
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   TextInput: {
//     height: 50,
//     flex: 1,
//     padding: 10,
//     marginLeft: 20,
//   },
//   forgot_button: {
//     height: 30,
//     marginBottom: 30,
//   },
//   loginBtn: {
//     width: "80%",
//     borderRadius: 25,
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 40,
//     backgroundColor: "#FF1493",
//   },
// });
