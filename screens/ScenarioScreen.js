// =============================
// ScenarioScreen.js
// =============================
import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import Slider from "@react-native-community/slider";

const ScenarioScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    currentAge: "25",
    retirementAge: "67",
    inputTab: true,
    relationshipStatus: "M",
    currentSavings: "20000",
    annualDeposit: "20000",
    interestRate: "4",
    yearsAfterRetirement: "20",
    desiredRetirementIncome: "100000",
    //calc
    futureValueTwo: "0",
    onTrack: true,
    annualRetirementIncome: "0",
    annualRetIncNum: "0", //the non-string version
    yearsData: "",
    //chartLabels: getChartLabels,
  });

  var today = new Date();
  var currentYear = today.getFullYear();

  const getYearsUntilRetirement = () => {
    const current_age = data.currentAge;
    const retirement_age = data.retirementAge;
    return retirement_age - current_age;
  };

  const calculate = () => {
    const years_after_retirement = data.yearsAfterRetirement;
    const desired_retirement_income = data.desiredRetirementIncome;
    const { future_value, years_data } = futureValue();
    const annual_retirement_income = future_value / years_after_retirement;
    const on_track =
      annual_retirement_income > desired_retirement_income ? true : false;

    setData({
      ...data,
      yearsData: years_data,
      futureValueTwo: toAud(future_value),
      annualRetirementIncome: toAud(annual_retirement_income),
      annualRetIncNum: annual_retirement_income,
      onTrack: on_track,
      inputTab: false,
    });
  };

  // chart stuff
  const labels = getChartLabels();

  const futureValue = () => {
    const current_age = data.currentAge;
    const retirement_age = data.retirementAge;
    const annual_deposit = data.annualDeposit;
    const interest_rate = data.interestRate;
    const current_savings = data.currentSavings;
    const int = interest_rate / 100;
    const years_data = [];
    const years_until_retirement = Array.from(
      new Array(getYearsUntilRetirement())
    );
    setData({
      ...data,
      yearsData: "",
    });
    const future_value = years_until_retirement.reduce((sum) => {
      const last_year_plus_annual_deposit = +sum + +annual_deposit;
      const interest_earned = last_year_plus_annual_deposit * int;
      const new_sum = +last_year_plus_annual_deposit + +interest_earned;
      // const new_sum = parseFloat(
      //   (last_year_plus_annual_deposit + interest_earned).toFixed(2)
      // ); // it was working...

      years_data.push(new_sum);
      return new_sum;
    }, current_savings);
    return { future_value, years_data };
  };

  const toAud = (number) => {
    return number.toLocaleString("en-AU", {
      style: "currency",
      currency: "AUD",
    });
  };

  function getChartLabels() {
    const years = Array.from(new Array(getYearsUntilRetirement()));
    return years.map((_, i) => i + parseInt(data.currentAge) + 1);
  }
  //end of chart stuff

  return (
    <View style={styles.container}>
      {data.inputTab ? (
        <View
          style={{
            padding: 5,
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
          <ScrollView>
            <View style={{ flex: 2, paddingLeft: 5, paddingRight: 5 }}>
              <TextInput
                label="Age"
                value={data.currentAge}
                placeholder="Enter your current age here"
                onChangeText={(value) =>
                  setData({
                    ...data,
                    currentAge: value,
                  })
                }
              />
              <Slider
                style={{ width: "95%", height: 40 }}
                minimumValue={12}
                maximumValue={65}
                value={data.currentAge}
                minimumTrackTintColor="#ff9090"
                maximumTrackTintColor="#aeafab"
                thumbTintColor="#bf6976"
                onSlidingComplete={(value) =>
                  setData({
                    ...data,
                    currentAge: Math.round(value),
                  })
                }
              />
              <TextInput
                label="Retirement Age"
                value={data.retirementAge}
                placeholder="Desired retirement age"
                onChangeText={(value) =>
                  setData({
                    ...data,
                    retirementAge: value,
                  })
                }
              />
              <Slider
                style={{ width: "95%", height: 40 }}
                minimumValue={20}
                maximumValue={85}
                value={data.retirementAge}
                minimumTrackTintColor="#ff9090"
                maximumTrackTintColor="#aeafab"
                thumbTintColor="#bf6976"
                onSlidingComplete={(value) =>
                  setData({
                    ...data,
                    retirementAge: Math.round(value),
                  })
                }
              />
              <TextInput
                label="Current Savings"
                value={data.currentSavings}
                placeholder="Your current savings"
                onChangeText={(value) =>
                  setData({
                    ...data,
                    currentSavings: value,
                  })
                }
              />
              <TextInput
                label="Annual Deposit"
                value={data.annualDeposit}
                placeholder="Yearly savings deposit"
                onChangeText={(value) =>
                  setData({
                    ...data,
                    annualDeposit: value,
                  })
                }
              />
              <TextInput
                label="Interest Rate"
                value={data.interestRate}
                placeholder="Savings Interest Rate"
                onChangeText={(value) =>
                  setData({
                    ...data,
                    interestRate: value,
                  })
                }
              />
              <TextInput
                label="Years after retirement"
                value={data.yearsAfterRetirement}
                placeholder="Years after retirement"
                onChangeText={(value) =>
                  setData({
                    ...data,
                    yearsAfterRetirement: value,
                  })
                }
              />
              <TextInput
                label="Desired Retirement Income"
                value={data.desiredRetirementIncome}
                placeholder="Desired Retirement Income"
                onChangeText={(value) =>
                  setData({
                    ...data,
                    desiredRetirementIncome: value,
                  })
                }
              />

              {/* <RadioButton.Group
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
              onPress={() => calculate()}
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

            <TouchableOpacity
              style={[
                styles.signIn,
                {
                  borderColor: "#f57576",
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}
              onPress={() => navigation.navigate("Advanced Scenario")}
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
          </ScrollView>
        </View>
      ) : (
        // Results page goes here

        <View style={styles.chartStyle}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
            <View>
              <LineChart
                data={{
                  labels: labels,
                  datasets: [
                    {
                      data: data.yearsData,
                    },
                  ],
                }}
                //width={Dimensions.get("window").width - 16} // from react-native
                width={600}
                height={350}
                yAxisLabel="$"
                // need this to shorten thousands to "K"
                // formatYLabel={(label, index) =>
                //   `${getFormatedLabel(label, index)}`
                // }
                yAxisInterval={50000} // optional, defaults to 1
                hidePointsAtIndex={Array.from({ length: 100 }, (v, k) =>
                  k % 2 === 0 ? k : null
                )}
                chartConfig={{
                  backgroundColor: "#a23425",
                  backgroundGradientFrom: "#ff7878",
                  backgroundGradientTo: "#ffa395",
                  decimalPlaces: 0, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: "4",
                    strokeWidth: "2",
                    stroke: "#ea4646",
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                  marginLeft: 10,
                }}
                paddingLeft="15"
              />
            </View>

            {/* <Button
            onPress={() =>
              console.log(
                "currAge ",
                parseInt(data.currentAge),
                "retAge ",
                parseInt(data.retirementAge),
                "rel ",
                data.relationshipStatus,
                "year",
                currentYear,
                "curSav ",
                data.currentSavings,
                "annDep ",
                data.annualDeposit,
                "intRate ",
                data.interestRate,
                "yrsAftRet ",
                data.yearsAfterRetirement,
                "desRetInc ",
                data.desiredRetirementIncome,
                "future_value",
                data.futureValueTwo,
                "years_data",
                data.yearsData
              )
            }
            title="Console log"
          /> */}
          </ScrollView>
          <View>
            <Text style={styles.info}>
              Total Retirement Savings: {data.futureValueTwo}
            </Text>
            {data.onTrack ? (
              <Text style={styles.success}>
                Annual Retirement Income: {toAud(data.annualRetirementIncome)}
              </Text>
            ) : (
              <Text style={styles.danger}>
                Annual Retirement Income: {toAud(data.annualRetirementIncome)}
              </Text>
            )}
          </View>
        </View>
      )}
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
  success: {
    textAlign: "center",
    margin: 10,
    padding: 10,
    color: "#3c763d",
    backgroundColor: "#dff0d8",
    borderColor: "#d6e9c6",
  },
  danger: {
    backgroundColor: "#ebcccc",
    textAlign: "center",
    margin: 10,
    padding: 10,
  },
  info: {
    backgroundColor: "#d9edf7",
    textAlign: "center",
    margin: 10,
    padding: 10,
  },
  chartStyle: {
    margin: 0,
    padding: 0,
  },
});
