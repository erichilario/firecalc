import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ScenarioScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};

export default ScenarioScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
