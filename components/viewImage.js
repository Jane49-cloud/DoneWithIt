import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  Button,
  Alert,
} from "react-native";

export default function ViewImage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.closebtn}></View>
      <View style={styles.deletebtn}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      ></Image>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  image: {
    resizeMode: "contain",
    height: "100%",
    width: "100%",
  },
  closebtn: {
    position: "absolute",
    height: 50,
    width: 50,
    backgroundColor: "#fc5c65",
    top: 40,
    left: 40,
  },
  deletebtn: {
    position: "absolute",
    height: 50,
    width: 50,
    backgroundColor: "#4ECDC4",
    top: 40,
    right: 10,
  },
});
