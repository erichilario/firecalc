// =============================
// AdvScenarioScreen.js
// =============================
import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import { TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LineChart, StackedBarChart } from "react-native-chart-kit";
import Collapsible from "react-collapsible";
import { block } from "react-native-reanimated";
import lineChartA from "../assets/linechart.jpg";
import barChartA from "../assets/barchart.jpg";
import Slider from "@react-native-community/slider";

const AdvScenarioScreen = () => {
  const [data, setData] = React.useState({
    collapseIsOpen: false,
    collapseDetailsIsOpen: true,
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
    //your choices
    ageStopSaving: "45",
    expensesPostRetirement: "0",
    retirementAge: "67",
    //your details
    currentAge: "25",
    yearlySalary: "90000",
    savingsRate: "57",
    annualCol: "30000",
    lifestyleCreep: "0",
    //your super
    superBalance: "80000",
    superGrowth: "5",
    superWithdrawalRate: "5",
    ageExtraToSuper: "40",
    percentExtraToSuper: "0",
    //PPOR
    pporCurrentValue: "400000",
    pporCurrentOwing: "350000",
    pporInterestRate: "3",
    pporAnnualRepayments: "25000",
    //ETF/LIC
    currentETFLICValue: "40000",
    safeWithdrawalRate: "4",
    paGrowthETFLIC: "6",
    //IP
    ipCurrentValue: "330000",
    ipCurrentOwing: "330000",
    ipInterestRate: "4",
    ipAnnualRepayments: "16500",
    //Assumptions
    ipYieldPA: "5",
    ipExpenses: "2",
    propertyGrowth: "3",
    //windfalls
    windfall1Year: "2023",
    windfall1Amount: "10000",
    windfall2Year: "2027",
    windfall2Amount: "0",
    //other passive income
    passiveIncomeStartYear: "2020",
    passiveIncomeEndYear: "2022",
    passiveIncomeNetPA: "1000",
    //temporary expenses
    tempExpenseStartYear: "2020",
    tempExpenseEndYear: "2025",
    tempExpenseCostPA: "12000",
    //temporary result
    advfutureValueTwo: "143347.50",
    advannualRetirementIncome: "4621480.92",
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

  //bar chart
  const bardata = {
    labels: [
      "2020 (25)",
      "2021 (26)",
      "2022 (27)",
      "2023 (28)",
      "2024 (29)",
      "2025 (30)",
      "2026 (31)",
      "2027 (32)",
      "2028 (33)",
      "2029 (34)",
      "2030 (35)",
      "2031 (36)",
      "2032 (37)",
      "2033 (38)",
      "2034 (39)",
      "2035 (40)",
      "2036 (41)",
      "2037 (42)",
      "2038 (43)",
      "2039 (44)",
      "2040 (45)",
      "2041 (46)",
      "2042 (47)",
      "2043 (48)",
      "2044 (49)",
      "2045 (50)",
      "2046 (51)",
      "2047 (52)",
      "2048 (53)",
      "2049 (54)",
    ],
    // legend: ["L1", "L2", "L3"],
    data: [
      [2666, 0],
      [4684, 0],
      [6658, 0],
      [7909, 0],
      [8384, 0],
      [8887, 0],
      [9420, 0],
      [9985, 0],
      [10584, 0],
      [11219, 0],
      [11892, 0],
      [13174, 0],
      [15105, 0],
      [18770, 24231],
      [24310, 24958],
      [27181, 25706],
      [33354, 26478],
      [39987, 27272],
      [47110, 28090],
      [54753, 28933],
      [62950, 29801],
      [71737, 30695],
      [77343, 31616],
      [83324, 32564],
      [89704, 33541],
      [96509, 34547],
      [98439, 35584],
      [100408, 36651],
      [102416, 37751],
      [104464, 38883],
    ],
    barColors: ["#c90e33", "#ffeeba"],
  };

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
            <View style={{ paddingLeft: 5, paddingRight: 5 }}>
              {data.collapseIsOpen ? (
                <View>
                  <TouchableOpacity
                    style={[
                      styles.collapseButton,
                      {
                        borderColor: "#f57576",
                        borderWidth: 1,
                        marginTop: 5,
                      },
                    ]}
                    onPress={() =>
                      setData({
                        ...data,
                        collapseIsOpen: false,
                        collapseDetailsIsOpen: false,
                      })
                    }
                  >
                    <LinearGradient
                      colors={["#f57576", "#a23425"]}
                      style={styles.collapseButton}
                    >
                      <Text style={{ color: "#fff", fontSize: 10 }}>
                        Collapse all
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>

                  {/* <Button
                  onPress={() =>
                    setData({
                      ...data,
                      collapseIsOpen: false,
                      collapseDetailsIsOpen: false,
                    })
                  }
                  title="Collapse all"
                /> */}
                </View>
              ) : (
                <View>
                  <TouchableOpacity
                    style={[
                      styles.collapseButton,
                      {
                        borderColor: "#f57576",
                        borderWidth: 1,
                        marginTop: 5,
                      },
                    ]}
                    onPress={() =>
                      setData({
                        ...data,
                        collapseIsOpen: true,
                        collapseDetailsIsOpen: true,
                      })
                    }
                  >
                    <LinearGradient
                      colors={["#f57576", "#a23425"]}
                      style={styles.collapseButton}
                    >
                      <Text style={{ color: "#fff", fontSize: 10 }}>
                        Expand all
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  {/* <Button
                  onPress={() =>
                    setData({
                      ...data,
                      collapseIsOpen: true,
                      collapseDetailsIsOpen: true,
                    })
                  }
                  title="Expand all"
                /> */}
                </View>
              )}
              <View style={{ marginBottom: 10 }}>
                <Collapsible
                  trigger="Your choices ▽"
                  open={data.collapseDetailsIsOpen}
                >
                  <TextInput
                    label="Age stop saving (semi-retire)"
                    value={data.ageStopSaving}
                    placeholder="Age you intend to semi-retire"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        ageStopSaving: value,
                      })
                    }
                  />
                  <Slider
                    style={{ width: "95%", height: 40 }}
                    minimumValue={20}
                    maximumValue={85}
                    value={data.ageStopSaving}
                    minimumTrackTintColor="#ff9090"
                    maximumTrackTintColor="#aeafab"
                    thumbTintColor="#bf6976"
                    onSlidingComplete={(value) =>
                      setData({
                        ...data,
                        ageStopSaving: Math.round(value),
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
                    label="Expenses change post-retirement"
                    value={data.expensesPostRetirement}
                    placeholder="Projected change in expenses after retirement"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        expensesPostRetirement: value,
                      })
                    }
                  />
                </Collapsible>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Collapsible
                  open={data.collapseIsOpen}
                  trigger="Your details ▽"
                >
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
                    label="Net average yearly salary"
                    value={data.yearlySalary}
                    placeholder="Your net average yearly salary"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        yearlySalary: value,
                      })
                    }
                  />
                  <TextInput
                    label="Annual Cost of Living (except Investments)"
                    value={data.annualCol}
                    placeholder="Your annual cost of living"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        annualCol: value,
                      })
                    }
                  />
                  <TextInput
                    label="Lifestyle creep"
                    value={data.lifestyleCreep}
                    placeholder="Post-retirement splurge %"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        lifestyleCreep: value,
                      })
                    }
                  />
                </Collapsible>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Collapsible
                  open={data.collapseIsOpen}
                  trigger="Your Superannuation ▽"
                >
                  <TextInput
                    label="Current balance"
                    value={data.superBalance}
                    placeholder="Current balance of your superannuation"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        superBalance: value,
                      })
                    }
                  />
                  <TextInput
                    label="Growth per annum"
                    value={data.superGrowth}
                    placeholder="Superannuation fund expected growth per year"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        superGrowth: value,
                      })
                    }
                  />
                  <TextInput
                    label="Withdrawal rate"
                    value={data.superWithdrawalRate}
                    placeholder="Withdrawal rate"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        superWithdrawalRate: value,
                      })
                    }
                  />
                  <TextInput
                    label="Age you started extra contributions"
                    value={data.ageExtraToSuper}
                    placeholder="Age you started putting extra into super"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        ageExtraToSuper: value,
                      })
                    }
                  />
                  <TextInput
                    label="What % of savings you put into super"
                    value={data.percentExtraToSuper}
                    placeholder="What % of savings you put into super"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        percentExtraToSuper: value,
                      })
                    }
                  />
                </Collapsible>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Collapsible
                  open={data.collapseIsOpen}
                  trigger="Your Principal Place of Residence (PPOR) ▽"
                >
                  <TextInput
                    label="PPOR Current Value"
                    value={data.pporCurrentValue}
                    placeholder="The current value of your PPOR"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        pporCurrentValue: value,
                      })
                    }
                  />
                  <TextInput
                    label="PPOR Mortgage Owing"
                    value={data.pporCurrentOwing}
                    placeholder="How much left to pay off"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        pporCurrentOwing: value,
                      })
                    }
                  />
                  <TextInput
                    label="PPOR Interest Rate"
                    value={data.pporInterestRate}
                    placeholder="Interest rate of the mortgage on the PPOR"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        pporInterestRate: value,
                      })
                    }
                  />
                  <TextInput
                    label="PPOR Annual Repayments"
                    value={data.pporAnnualRepayments}
                    placeholder="Annual repayment on the mortgage on the PPOR"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        pporAnnualRepayments: value,
                      })
                    }
                  />
                </Collapsible>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Collapsible
                  open={data.collapseIsOpen}
                  trigger="Your Stock Portfolio ▽"
                >
                  <TextInput
                    label="Current Value of ETF/LIC"
                    value={data.currentETFLICValue}
                    placeholder="Current value of your stock portfolio"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        currentETFLICValue: value,
                      })
                    }
                  />
                  <TextInput
                    label="Safe withdrawal rate"
                    value={data.safeWithdrawalRate}
                    placeholder="Safe withdrawal rate"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        safeWithdrawalRate: value,
                      })
                    }
                  />
                  <TextInput
                    label="Growth per year"
                    value={data.paGrowthETFLIC}
                    placeholder="Expected yearly growth of ETF/LIC"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        paGrowthETFLIC: value,
                      })
                    }
                  />
                </Collapsible>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Collapsible
                  open={data.collapseIsOpen}
                  trigger="Your Investment Property/Properties (IP) ▽"
                >
                  <TextInput
                    label="IP Current Value"
                    value={data.ipCurrentValue}
                    placeholder="Current value of IP/IPs"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        ipCurrentValue: value,
                      })
                    }
                  />
                  <TextInput
                    label="IP Mortgage OWing"
                    value={data.ipCurrentOwing}
                    placeholder="How much left to pay off"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        ipCurrentOwing: value,
                      })
                    }
                  />
                  <TextInput
                    label="IP Interest Rate"
                    value={data.ipInterestRate}
                    placeholder="Interest Rate on IP Mortgage"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        ipInterestRate: value,
                      })
                    }
                  />
                  <TextInput
                    label="IP Annual Repayments"
                    value={data.ipAnnualRepayments}
                    placeholder="Annual repayment on the IP mortgage"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        ipAnnualRepayments: value,
                      })
                    }
                  />
                </Collapsible>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Collapsible open={data.collapseIsOpen} trigger="Assumptions ▽">
                  <TextInput
                    label="IP Yield per annum"
                    value={data.ipYieldPA}
                    placeholder="How much does the IP earn per year"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        ipYieldPA: value,
                      })
                    }
                  />
                  <TextInput
                    label="IP Expenses"
                    value={data.ipExpenses}
                    placeholder="Expenses related to the Investment Property/ies"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        ipExpenses: value,
                      })
                    }
                  />
                  <TextInput
                    label="Property Growth per annum"
                    value={data.propertyGrowth}
                    placeholder="Forecasted property growth per annum"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        propertyGrowth: value,
                      })
                    }
                  />
                </Collapsible>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Collapsible open={data.collapseIsOpen} trigger="Windfall(s) ▽">
                  <TextInput
                    label="Windfall 1 Year"
                    value={data.windfall1Year}
                    placeholder="Year of first windfall"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        windfall1Year: value,
                      })
                    }
                  />
                  <TextInput
                    label="Windfall 1 Amount"
                    value={data.windfall1Amount}
                    placeholder="Amount of first windfall"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        windfall1Amount: value,
                      })
                    }
                  />
                  <TextInput
                    label="Windfall 2 Year"
                    value={data.windfall2Year}
                    placeholder="Year of second windfall"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        windfall2Year: value,
                      })
                    }
                  />
                  <TextInput
                    label="Windfall 2 Amount"
                    value={data.windfall2Amount}
                    placeholder="Amount of second windfall"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        windfall2Amount: value,
                      })
                    }
                  />
                </Collapsible>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Collapsible
                  open={data.collapseIsOpen}
                  trigger="Other Passive Income ▽"
                >
                  <TextInput
                    label="Passive income year started"
                    value={data.passiveIncomeStartYear}
                    placeholder="What year did you start earning passive income"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        passiveIncomeStartYear: value,
                      })
                    }
                  />
                  <TextInput
                    label="Passive income year ended"
                    value={data.passiveIncomeEndYear}
                    placeholder="What year did passive income cease"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        passiveIncomeEndYear: value,
                      })
                    }
                  />
                  <TextInput
                    label="Amount of Passive income per annum (net)"
                    value={data.passiveIncomeNetPA}
                    placeholder="Net yearly income from passive income"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        passiveIncomeNetPA: value,
                      })
                    }
                  />
                </Collapsible>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Collapsible
                  open={data.collapseIsOpen}
                  trigger="Temporary higher expenses ▽"
                >
                  <TextInput
                    label="Year temporary expense started"
                    value={data.tempExpenseStartYear}
                    placeholder="What year did/will the temporary expense begin"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        tempExpenseStartYear: value,
                      })
                    }
                  />
                  <TextInput
                    label="Year temporary expense ended"
                    value={data.tempExpenseEndYear}
                    placeholder="What year will the temporary expense cease"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        tempExpenseEndYear: value,
                      })
                    }
                  />
                  <TextInput
                    label="Average yearly cost of temporary expense"
                    value={data.tempExpenseCostPA}
                    placeholder="Average yearly cost of temporary expense"
                    onChangeText={(value) =>
                      setData({
                        ...data,
                        tempExpenseCostPA: value,
                      })
                    }
                  />
                </Collapsible>
              </View>
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
          </ScrollView>
        </View>
      ) : (
        // Results page goes here

        <View style={styles.chartStyle}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
            <View>
              {/* <LineChart
                withVerticalLabels={false}
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
              />
              <StackedBarChart
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
                width={600}
                height={350}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                  marginLeft: 10,
                }}
                data={bardata}
              /> */}
              <Text style={styles.textSign}>Income and Expenses</Text>
              <Image
                style={{ width: 756, height: 513, borderRadius: 50 }}
                source={lineChartA}
              />
              <Text style={styles.textSign}>
                Net worth of Income-producing Assets (plus PPOR)
              </Text>
              <Image
                style={{ width: 757, height: 513, borderRadius: 50 }}
                source={barChartA}
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
              Total Retirement Savings: {data.advfutureValueTwo}
            </Text>
            {data.onTrack ? (
              <Text style={styles.success}>
                Annual Retirement Income:{" "}
                {toAud(data.advannualRetirementIncome)}
              </Text>
            ) : (
              <Text style={styles.danger}>
                Annual Retirement Income:{" "}
                {toAud(data.advannualRetirementIncome)}
              </Text>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default AdvScenarioScreen;

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
  collapseButton: {
    width: "100%",
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
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
