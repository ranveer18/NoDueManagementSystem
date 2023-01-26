import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import SettingMenu from "../Component/SettingMenu";
import MenuBar from "../Component/MenuBar";

const SettingScreen = () => {
  const Username = "Vasooli Bhai";
  const navigation = useNavigation();

  return (
    <View style={styles.SettingScreen}>
      <View style={styles.UserDetails}>
        <Image
          source={require("../../myAssets/mypic.jpg")}
          style={styles.headerImage}
        />
        <Text style={styles.userName}>{Username}</Text>
      </View>

      <View style={styles.settingmenuStyle}>
        <SettingMenu />
      </View>
      <View style={styles.menuStyle}>
        <MenuBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SettingScreen: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "black",
  },
  headerImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  UserDetails: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 200,
    backgroundColor: "#333",
  },
  iconStytle: {
    width: "10%",
    height: 35,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    padding: 10,
  },
  menuStyle: {
    backgroundColor: "#333",
    paddingVertical: 5,
  },
  settingmenuStyle: {
    bottom: 100,
  },
});

export default SettingScreen;
