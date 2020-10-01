import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./SplashScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";

import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";
import HelpScreen from "./HelpScreen";
import AboutScreen from "./AboutScreen";
import ContactScreen from "./ContactScreen";
import ScenarioScreen from "./ScenarioScreen";

import Icon from "react-native-vector-icons/Ionicons";

const RootStack = createStackNavigator();
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const HelpStack = createStackNavigator();
const AboutStack = createStackNavigator();
const ContactStack = createStackNavigator();
const ScenarioStack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="SignInScreen" component={SignInScreen} />
      <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </RootStack.Navigator>
  );
};

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f57576",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#f57576"
              onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

const SettingsStackScreen = ({ navigation }) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f57576",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#f57576"
              onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          ),
        }}
      />
    </SettingsStack.Navigator>
  );
};

const HelpStackScreen = ({ navigation }) => {
  return (
    <HelpStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f57576",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <HelpStack.Screen
        name="Help"
        component={HelpScreen}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#f57576"
              onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          ),
        }}
      />
    </HelpStack.Navigator>
  );
};

const AboutStackScreen = ({ navigation }) => {
  return (
    <AboutStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f57576",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <AboutStack.Screen
        name="About"
        component={AboutScreen}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#f57576"
              onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          ),
        }}
      />
    </AboutStack.Navigator>
  );
};

const ContactStackScreen = ({ navigation }) => {
  return (
    <ContactStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f57576",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <ContactStack.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#f57576"
              onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          ),
        }}
      />
    </ContactStack.Navigator>
  );
};

const ScenarioStackScreen = ({ navigation }) => {
  return (
    <ScenarioStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f57576",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <ScenarioStack.Screen
        name="Scenario"
        component={ScenarioScreen}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#f57576"
              onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          ),
        }}
      />
    </ScenarioStack.Navigator>
  );
};

export {
  RootStackScreen,
  HomeStackScreen,
  SettingsStackScreen,
  HelpStackScreen,
  AboutStackScreen,
  ContactStackScreen,
  ScenarioStackScreen,
};
