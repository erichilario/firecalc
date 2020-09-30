import { StatusBar } from "expo-status-bar";
import React from "react";
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
} from "./screens/RootStackScreen";

// import RootStackScreen from "./screens/RootStackScreen";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <RootStackScreen /> */}
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Settings" component={SettingsStackScreen} />
        <Drawer.Screen name="Help" component={HelpStackScreen} />
        <Drawer.Screen name="About" component={AboutStackScreen} />
        <Drawer.Screen name="Contact" component={ContactStackScreen} />
        <Drawer.Screen name="Scenario" component={ScenarioStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
