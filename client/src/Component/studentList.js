import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { DataTable } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";

const StudentList = () => {
  const navigation = useNavigation();

  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "http://192.168.0.105:5050/api/v1/student"
      );
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.Maincontainer}>
      <View>
        <TouchableOpacity
          style={styles.addbutton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text styles={styles.addbuttonText}>+ Add New </Text>
        </TouchableOpacity>
      </View>
      <DataTable style={styles.container}>
        <ScrollView>
          <DataTable.Header style={styles.tableHeader}>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title>Registration No.</DataTable.Title>
            {/* <DataTable.Title>Branch</DataTable.Title> */}
            <DataTable.Title>Action</DataTable.Title>
          </DataTable.Header>
          {users.map((user, index) => (
            <DataTable.Row key={user._id}>
              <DataTable.Cell>{user.name}</DataTable.Cell>
              <DataTable.Cell>{user.registration}</DataTable.Cell>
              {/* <DataTable.Cell>{user.branch}</DataTable.Cell> */}
              <DataTable.Cell>
                <TouchableOpacity
                  style={styles.editbutton}
                  backgroundColor="blue"
                  onPress={() =>
                    navigation.navigate(`EditStudent`, {
                      id: user._id,
                    })
                  }
                >
                  <Text>edit</Text>
                </TouchableOpacity>
                {/*  */}
              </DataTable.Cell>
              <TouchableOpacity
                style={styles.viewbutton}
                backgroundColor="blue"
                onPress={() =>
                  navigation.navigate(`ViewStudent`, {
                    id: user._id,
                  })
                }
              >
                {/* <Text>View </Text> */}
                <Text>👁️</Text>
              </TouchableOpacity>
            </DataTable.Row>
          ))}
        </ScrollView>
      </DataTable>
    </View>
  );
};
const styles = StyleSheet.create({
  Maincontainer: {
    paddingVertical: 15,
  },
  addbutton: {
    padding: 5,
    width: 100,
    marginTop: 15,
    marginLeft: 15,
    backgroundColor: "green",
  },
  editbutton: {
    padding: 10,
    width: 70,
    backgroundColor: "#3e8ed0",
  },
  viewbutton: {
    alignSelf: "center",
  },
  addbuttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "400",
  },
  container: {
    alignSelf: "center",
    paddingTop: 15,
  },
  tableHeader: {
    backgroundColor: "#DCDCDC",
  },
});
export default StudentList;
