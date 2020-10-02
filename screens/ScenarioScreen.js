import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RadioButton } from "react-native-paper";

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
    age: "",
    retirementAge: "68",
    inputTab: true,
    relationshipStatus: "M",
    currentSavings: "",
    annualDeposit: "",
    interestRate: "",
    yearsAfterRetirement: "",
    desiredRetirementIncome: "",
  });

  var today = new Date();
  var currentYear = today.getFullYear();

  //   const [data, setData] = React.useState({
  //     inputTab: true,
  //   });

  //   const initialInputData = {
  //     inputButton: false,
  //     age: "21",
  //     relationshipStatus: "Married",
  //     income: "99000",
  //     desiredRetirementAge: "58",
  //     superannuationBalance: "150000",
  //     employerContribution: "5%",
  //   };

  //   const handleChange = (event) => {
  //     const { name, type, text } = event;
  //     console.log(text);
  //     let processedData = text;
  //     if (type === "text") {
  //       processedData = value.toUpperCase();
  //     } else if (type === "number") {
  //       console.log(type);
  //       processedData = value * 2;
  //     }
  //     setState({ [name]: processedData });
  //   };

  return (
    <View style={styles.container}>
      <Text onPress={() => alert(currentYear)}>cc</Text>
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
      {
        data.inputTab ? (
          <View>
            <View style={{ paddingLeft: 5, paddingRight: 5 }}>
              <TextInput
                label="Age"
                placeholder="Enter your current age here"
                onChangeText={(value) =>
                  setData({
                    ...data,
                    age: value,
                  })
                }
              />

              <TextInput
                label="Retirement Age"
                placeholder="Desired retirement age"
                onChangeText={(value) =>
                  setData({
                    ...data,
                    retirementAge: value,
                  })
                }
              />
              <RadioButton.Group
                onValueChange={(value) =>
                  setData({
                    ...data,
                    relationshipStatus: value,
                  })
                }
                value={data.relationshipStatus}
              >
                <RadioButton.Item label="Single" value="S" />
                <RadioButton.Item label="Married" value="M" />
              </RadioButton.Group>
              {/* example of radioButton below */}
              {/* <RadioButton.Group
                onValueChange={(value) => setValue(value)}
                value={value}
              >
                <RadioButton.Item label="First item" value="first" />
                <RadioButton.Item label="Second item" value="second" />
              </RadioButton.Group> */}
              {/* end of Input section View             */}
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
                <Text style={[styles.textSign, { color: "#fff" }]}>
                  Advanced
                </Text>
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
                  parseInt(data.age),
                  "retirementAge ",
                  parseInt(data.retirementAge),
                  "rel ",
                  data.relationshipStatus,
                  "year",
                  currentYear
                )
              }
            >
              <LinearGradient
                colors={["#f57576", "#a23425"]}
                style={styles.signIn}
              >
                <Text style={[styles.textSign, { color: "#fff" }]}>
                  Calculate
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        ) : null
        // Results page goes here
      }
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
  buttonView: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    flex: 1,
    flexWrap: "wrap",
  },
});
