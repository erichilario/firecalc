import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  FlatList,
  Linking,
  StatusBar,
  StyleSheet,
  Button,
  Modal,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native";

const termsConds =
  "• This is a model and not a prediction. The results are based cased on the limited information that you have provided " +
  "and assumptions made about the future. \n• The amounts projected are estimates only and are not guaranteed. \n" +
  "• Do not rely solely on this calculator to make decisions about your retirement. \n" +
  "• There may be other factors to take into account. Consider your own needs, financial situation " +
  "and investment objectives. \n• You may wish to get advice from a licensed financial adviser. ";

const SplashScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require("../assets/favicon.png")}
          style={styles.logo}
          resizeMode="stretch"
        />
        <Text
          style={[
            styles.title,
            {
              color: colors.text,
            },
          ]}
        >
          FIRE Calculator
        </Text>
        <Text
          style={{
            fontSize: 15,
            marginTop: -20,
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          {"\n"}FINANCIAL INDEPENDENCE{"\n"}RETIRE EARLY
        </Text>
      </View>
      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}
        animation="fadeInUpBig"
      >
        <Text
          style={{
            fontSize: 15,
            color: colors.text,
            textAlign: "center",
            marginTop: -20,
          }}
        >
          By clicking continue, you accept the following Terms and Conditions:
        </Text>
        <ScrollView>
          <Text style={styles.text}>{termsConds}</Text>
        </ScrollView>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
            <LinearGradient
              colors={["#f57576", "#a23425"]}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>Continue</Text>
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: "#05375a",
    fontSize: 40,
    fontWeight: "bold",
  },
  text: {
    fontSize: 10,
    color: "grey",
    marginTop: 5,
  },
  innerText: {
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});
