import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "yellow",
        }}
      ></View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "tomato",
        }}
      ></View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "green",
        }}
      ></View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "gray",
        }}
      ></View>
      <View
        style={{
          width: 400,
          flexShrink: 1, // shrinks so that other items can fit on the screen
          height: 100,
          backgroundColor: "greenyellow",
        }}
      ></View>
      <View
        style={{
          width: 100,
          flexShrink: 1, // shrinks so that other items can fit on the screen
          height: 100,
          backgroundColor: "greenyellow",
        }}
      ></View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center", //works when there is wrap
    flexWrap: "wrap",
    // flexGrow:the same as setting flex
  },
});
