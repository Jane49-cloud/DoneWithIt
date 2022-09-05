import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import {
  useDimentions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: "50%",
          height: "80%",
          backgroundColor: "yellow",
        }}
      >
        <Text style={styles.text}>hello geeks </Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    innerHeight: 50,
    backgroundColor: "orange",
    color: "gray",
    margin: 10,
  },
});
