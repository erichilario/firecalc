// =============================
// DrawerContent.js
// =============================
import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import myAvatar from "../assets/avatar.jpg";
import { AuthContext } from "../components/context";
import IonIcon from "react-native-vector-icons/Ionicons";

export function DrawerContent(props) {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                flexDirection: "column",
                marginTop: 20,
                marginLeft: -20,
                alignItems: "center",
              }}
            >
              <Avatar.Image source={myAvatar} size={150} />
            </View>
            <View
              style={{
                flexDirection: "column",
                marginLeft: -20,
                alignItems: "center",
              }}
            >
              <Title style={styles.title}>Kelly Masters</Title>
              <Caption style={styles.caption}>@kmasters</Caption>
            </View>
            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="home-outline" color={color} size={size} />
                )}
                label="Home"
                onPress={() => {
                  props.navigation.navigate("Home");
                }}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="settings-outline" color={color} size={size} />
                )}
                label="Settings"
                onPress={() => {
                  props.navigation.navigate("Settings");
                }}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="help-circle-outline" color={color} size={size} />
                )}
                label="Help"
                onPress={() => {
                  props.navigation.navigate("Help");
                }}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="information-outline" color={color} size={size} />
                )}
                label="About"
                onPress={() => {
                  props.navigation.navigate("About");
                }}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="phone" color={color} size={size} />
                )}
                label="Contact"
                onPress={() => {
                  props.navigation.navigate("Contact");
                }}
              />
            </Drawer.Section>
          </View>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
