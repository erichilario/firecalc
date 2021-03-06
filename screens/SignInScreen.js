// =============================
// SignInScreen.js
// =============================
import React from "react";
import {
  View,
  Text,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "@react-navigation/native";
import { AuthContext } from "../components/context";
import Users from "../model/users";

const SignInScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const [data, setData] = React.useState({
    username: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const { signIn } = React.useContext(AuthContext);

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    if (val.length > 3) {
      console.log(val);
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  function logMeIn(userName, password) {
    const foundUser = Users.filter((item) => {
      return userName == item.username && password == item.password;
    });

    if (data.username.length == 0 || data.password.length == 0) {
      alert("Username or password cannot be empty.");
      return;
    }

    if (foundUser.length == 0) {
      alert("Username or password is incorrect.");
      // Alert.alert("Invalid user!", "Username or password is incorrect.", [
      //   { text: "Okay" },
      // ]);
      return;
    }
    signIn(foundUser);
    //location.reload();
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#f57576" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Login</Text>
        {/* <Text>user1 password</Text> */}
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
        <Text style={styles.text_footer}>Username</Text>
        <View style={styles.action}>
          <FontAwesome
            style={{ marginRight: 10 }}
            name="user-o"
            color="#05375a"
            size={20}
          />
          <TextInput
            placeholder="Username"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            // onEndEditing={(evt) => handleValidUser(evt.nativeEvent.text)} // not firing
            onEndEditing={(evt) => console.log(evt.nativeEvent.text)} // also not firing?
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather
                style={{ marginLeft: 10 }}
                name="check-circle"
                color="green"
                size={20}
              />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Username must be 4 characters long.
            </Text>
          </Animatable.View>
        )}

        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <Feather
            style={{ marginRight: 10 }}
            name="lock"
            color="#05375a"
            size={20}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather
                style={{ marginLeft: 10 }}
                name="eye-off"
                color="grey"
                size={20}
              />
            ) : (
              <Feather
                style={{ marginLeft: 10 }}
                name="eye"
                color="grey"
                size={20}
              />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password must be 8 or more characters long.
            </Text>
          </Animatable.View>
        )}

        <TouchableOpacity>
          <Text style={{ color: "#999999", marginTop: 10, marginBottom: 20 }}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        {/* <View style={styles.button}> */}
        <TouchableOpacity
          style={styles.signIn}
          onPress={() => {
            //loginHandle(data.username, data.password);
            logMeIn(data.username, data.password);
          }}
        >
          <LinearGradient colors={["#f57576", "#a23425"]} style={styles.signIn}>
            {/* <TouchableOpacity onPress={() => navigation.navigate("Home")}> */}

            <Text style={[styles.textSign, { color: "#fff" }]}> Sign In</Text>
          </LinearGradient>
        </TouchableOpacity>
        {/* </View> */}

        <TouchableOpacity
          onPress={() => navigation.navigate("SignUpScreen")}
          style={[
            styles.signIn,
            {
              borderColor: "#f57576",
              borderWidth: 1,
              marginTop: 15,
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
            Sign Up
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
    //textAlign: "center",
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 50,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 20,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
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
