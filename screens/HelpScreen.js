import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HelpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Help Screen</Text>
      <Button title="Click here" onPress={() => alert("Button clicked!")} />
    </View>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
