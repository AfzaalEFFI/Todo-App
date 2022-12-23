import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import MyStack from "./screens/navigamtion/MyStack";

export default function App() {
  return (
    <View style={style.contanier}>
      <MyStack />
    </View>
  );
}

const style = StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 10,
  },
});
