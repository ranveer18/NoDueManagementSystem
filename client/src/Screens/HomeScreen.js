import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import MenuBar from "../Component/MenuBar";
import StudentList from "../Component/studentList";
const HomeScreen = (props) => {
  const description =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ";

  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <StudentList />
      </View>

      <View style={styles.menuStyle}>
        <MenuBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    textAlign: "center",
  },

  homeTop: {
    display: "flex",
    height: "90%",
    paddingHorizontal: 10,
  },

  headerImage: {
    height: "40%",
    width: "100%",
    marginTop: 50,
    borderRadius: 20,
  },

  mainHeader: {
    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase",
  },

  paraStyle: {
    textAlign: "left",
    fontSize: 19,
    color: "#7d7d7d",
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26,
  },

  menuStyle: {
    backgroundColor: "#333",
    paddingVertical: 5,
  },
});

export default HomeScreen;
