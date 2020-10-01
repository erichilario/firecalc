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

const ScenarioScreen = () => {
  const [data, setData] = React.useState({
    inputTab: true,
  });

  const initialInputData = {
    inputButton: false,
    age: "21",
    relationshipStatus: "Married",
    income: "99000",
    desiredRetirementAge: "58",
    superannuationBalance: "150000",
    employerContribution: "5%",
  };

  return (
    <View style={styles.container}>
      {data.inputTab ? (
        <View
          style={{
            padding: 5,
            textAlign: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={[
              styles.inputResult,
              {
                backgroundColor: "#f57576",
                borderColor: "#f57576",
                borderWidth: 1,
                padding: 5,
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#fff",
                },
              ]}
            >
              Input
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              setData({
                ...data,
                inputTab: false,
              })
            }
            style={[
              styles.inputResult,
              {
                backgroundColor: "#fff",
                borderColor: "#f57576",
                borderWidth: 1,
                padding: 5,
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#f57576",
                },
              ]}
            >
              Results
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            padding: 5,
            textAlign: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() =>
              setData({
                ...data,
                inputTab: true,
              })
            }
            style={[
              styles.inputResult,
              {
                backgroundColor: "#fff",
                borderColor: "#f57576",
                borderWidth: 1,
                padding: 5,
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#f57576",
                },
              ]}
            >
              Input
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.inputResult,
              {
                backgroundColor: "#f57576",
                borderColor: "#f57576",
                borderWidth: 1,
                padding: 5,
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#fff",
                },
              ]}
            >
              Results
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {data.inputTab ? (
        <View>
          <View style={{ paddingLeft: 5, paddingRight: 5 }}>
            <TextInput
              label="Age"
              value={initialInputData.age}
              onChangeText={(age) => this.setState({ age })}
            />
            <TextInput
              label="Relationship status"
              value={initialInputData.relationshipStatus}
              onChangeText={(relationshipStatus) =>
                this.setState({ relationshipStatus })
              }
            />
          </View>

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
            <LinearGradient
              colors={["#f57576", "#a23425"]}
              style={styles.signIn}
            >
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
              console.log(
                "age ",
                initialInputData.age,
                "rel ",
                initialInputData.relationshipStatus
              )
            }
          >
            <LinearGradient
              colors={["#f57576", "#a23425"]}
              style={styles.signIn}
            >
              <Text style={[styles.textSign, { color: "#fff" }]}>Done</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

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
  inputResult: {
    width: "100%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
