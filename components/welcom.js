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

export default function Welcom() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.logoview}>
          <Image
            source={require("../assets/logo-red.png")}
            style={styles.Image}
          ></Image>
          <Text style={{}}>Sell what you don't need</Text>
        </View>
        <View>
          <Button
            title="Press me"
            onPress={() => Alert.alert("Simple Button pressed")}
            style={styles.login}
            color="#fc5c65"
          />
          <Button
            title="Press me"
            onPress={() => Alert.alert("Simple Button pressed")}
            style={styles.login}
            color="#4ECDC4"
          />
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    opacity: 0.8,
  },
  Image: {
    height: 100,
    width: 100,
    // alignSelf: "center",
  },
  logoview: {
    flex: 1,
    alignItems: "center",
    top: 70,
  },
  login: {
    height: 150,
  },
});
