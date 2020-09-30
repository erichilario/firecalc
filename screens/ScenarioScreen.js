import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";

// const ScenarioScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Button
//         title="Go to Settings"
//         onPress={() => navigation.navigate("Settings")}
//       />
//     </View>
//   );
// };

class ScenarioScreen extends React.Component {
  state = {
    age: "",
    relationshipStatus: "",
    income: "",
    desiredRetirementAge: "",
    superannuationBalance: "",
    employerContribution: "",
  };

  render() {
    return (
      <View styles={styles.container}>
        <TextInput
          label="Age"
          value={this.state.age}
          onChangeText={(age) => this.setState({ age })}
        />
        <TextInput
          label="Relationship status"
          value={this.state.relationshipStatus}
          onChangeText={(relationshipStatus) =>
            this.setState({ relationshipStatus })
          }
        />

        <TouchableOpacity
          style={[
            styles.signIn,
            {
              borderColor: "#f57576",
              borderWidth: 1,
              marginTop: 15,
            },
          ]}
          onPress={() => console.log("Pressed")}
        >
          <LinearGradient colors={["#f57576", "#a23425"]} style={styles.signIn}>
            <Text style={[styles.textSign, { color: "#fff" }]}>Advanced</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.signIn,
            {
              borderColor: "#f57576",
              borderWidth: 1,
              marginTop: 15,
            },
          ]}
          onPress={() =>
            console.log(this.state.age, " ", this.state.relationshipStatus)
          }
        >
          <LinearGradient colors={["#f57576", "#a23425"]} style={styles.signIn}>
            <Text style={[styles.textSign, { color: "#fff" }]}>Done</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ScenarioScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
