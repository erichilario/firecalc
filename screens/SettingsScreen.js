// import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const SettingsScreen = ({ navigation }) => {
  const [count, setCount] = React.useState(0);

  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      {count % 3 == 0 && count != 0 ? (
        <Button title="bang" onPress={() => setCount(count + 1)} />
      ) : (
        <Button title="click me" onPress={() => setCount(count + 1)} />
      )}
      <Text>{count}</Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
