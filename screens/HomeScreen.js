// =============================
// HomeScreen.js
// =============================
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.signIn}
        onPress={() => {
          navigation.navigate("Scenario");
        }}
      >
        <LinearGradient colors={["#f57576", "#a23425"]} style={styles.signIn}>
          <Text style={[styles.textSign, { color: "#fff" }]}>
            Basic Scenario
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signIn}
        onPress={() => {
          navigation.navigate("Advanced Scenario");
        }}
      >
        <LinearGradient colors={["#f57576", "#a23425"]} style={styles.signIn}>
          <Text style={[styles.textSign, { color: "#fff" }]}>
            Advanced Scenario
          </Text>
        </LinearGradient>
      </TouchableOpacity>
      {/* <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
      <Text>Scenario</Text>
      <Button title="New" onPress={() => navigation.navigate("Scenario")} /> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 20,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
