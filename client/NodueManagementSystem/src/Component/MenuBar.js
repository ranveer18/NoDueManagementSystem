import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const MenuBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Home")}
      >
        <FontAwesome name="home" size={32} color="white" />

        <Text style={{ color: "#fff" }}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Setting")}
      >
        <FontAwesome name="user" size={32} color="white" />

        <Text style={{ color: "#fff" }}>User</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textStyle: {
    textTransform: "uppercase",
  },
  iconStytle: {
    width: "100%",
    height: 35,
  },
});

export default MenuBar;
