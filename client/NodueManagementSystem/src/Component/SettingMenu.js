import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SettingMenu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={styles.box}>
          <View style={{ flexDirection: "row", paddingLeft: 20 }}>
            <FontAwesome name="home" size={32} color="white" />
            <Text style={{ color: "#fff", fontSize: 22, paddingLeft: 20 }}>
              Home
            </Text>
          </View>
          <AntDesign name="right" size={20} color="white" />
        </View>
      </TouchableOpacity>
      {/*  */}
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={styles.box}>
          <View style={{ flexDirection: "row", paddingLeft: 20 }}>
            <FontAwesome name="home" size={32} color="white" />
            <Text style={{ color: "#fff", fontSize: 22, paddingLeft: 20 }}>
              Home
            </Text>
          </View>
          <AntDesign name="right" size={20} color="white" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={styles.box}>
          <View style={{ flexDirection: "row", paddingLeft: 20 }}>
            <FontAwesome name="home" size={32} color="white" />
            <Text style={{ color: "#fff", fontSize: 22, paddingLeft: 20 }}>
              Home
            </Text>
          </View>
          <AntDesign name="right" size={20} color="white" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={styles.box}>
          <View style={{ flexDirection: "row", paddingLeft: 20 }}>
            <FontAwesome name="home" size={32} color="white" />
            <Text style={{ color: "#fff", fontSize: 22, paddingLeft: 20 }}>
              Home
            </Text>
          </View>
          <AntDesign name="right" size={20} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    // backgroundColor: "#333",
    padding: 10,
  },
  //   wrapper: {
  //     marginTop: 10,
  //     backgroundColor: "#333",
  //     padding: 10,
  //   },
});

export default SettingMenu;
