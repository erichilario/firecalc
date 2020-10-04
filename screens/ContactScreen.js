import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ContactScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Contact Screen</Text>
      <Button title="Click here" onPress={() => alert("Button clicked!")} />
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
