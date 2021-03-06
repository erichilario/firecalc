// =============================
// App.js
// =============================
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { DrawerContent } from "./screens/DrawerContent";

import Icon from "react-native-vector-icons/Ionicons";

import {
  RootStackScreen,
  HomeStackScreen,
  SettingsStackScreen,
  HelpStackScreen,
  AboutStackScreen,
  ContactStackScreen,
  ScenarioStackScreen,
  AdvScenarioStackScreen,
} from "./screens/RootStackScreen";
import { ActivityIndicator } from "react-native-paper";
import { AuthContext } from "./components/context";
import AsyncStorage from "@react-native-community/async-storage";
// import Users from "./model/users";

// import RootStackScreen from "./screens/RootStackScreen";

const Drawer = createDrawerNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (foundUser) => {
        // setUserToken("alkjbvlks");
        // setIsLoading(false);

        const userToken = String(foundUser[0].userToken);
        const userName = foundUser[0].username;

        // if (userName == "user" && password == "pass") {

        try {
          console.log("success");
          await AsyncStorage.setItem("userToken", userToken);
        } catch (e) {
          console.log(e);
        }
        // } else {
        //   console.log("fail");
        // }
        // // console.log("user atoken: ", userToken);
        // console.log("userName: ", userName, " || password: ", password);
        dispatch({ type: "LOGIN", id: userName, token: userToken });
      },
      signOut: async () => {
        // setUserToken("null");
        // setIsLoading(false);
        //console.log("user token: ", userToken);
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGOUT" });
      },
      signUp: () => {
        // setUserToken("alkjbvlks");
        // setIsLoading(false);
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      //setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        console.log(e);
      }
      //console.log("user token: ", userToken);
      dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
    }); // 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
          >
            <Drawer.Screen name="Home" component={HomeStackScreen} />
            <Drawer.Screen name="Settings" component={SettingsStackScreen} />
            <Drawer.Screen name="Help" component={HelpStackScreen} />
            <Drawer.Screen name="About" component={AboutStackScreen} />
            <Drawer.Screen name="Contact" component={ContactStackScreen} />
            <Drawer.Screen name="Scenario" component={ScenarioStackScreen} />
            <Drawer.Screen
              name="Advanced Scenario"
              component={AdvScenarioStackScreen}
            />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
