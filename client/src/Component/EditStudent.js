import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const EditStudent = ({ route }) => {
  const navigation = useNavigation();

  const [name, setName] = useState("");

  const { id } = route.params;
  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    try {
      const response = await axios.get(
        `http://192.168.0.105:5050/api/v1/student/${id}`
      );
      setName(response.data[0].name);
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async () => {
    try {
      await axios.patch(`http://192.168.0.105:5050/api/v1/student/${id}`, {
        name,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteUser = async (id) => {
    try {
      // await axios.delete(`http://192.168.0.105:5050/api/v1/student/${id}`);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <View>
        <Text>Name</Text>
        <View>
          <TextInput
            type="text"
            className="input"
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="Name"
          />
        </View>
      </View>

      <TouchableOpacity
        backgroundColor="blue"
        style={styles.updatebutton}
        onPress={updateUser}
      >
        <Text>Update</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deletebutton} onPress={deleteUser}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  updatebutton: {
    padding: 10,
    width: 70,
    backgroundColor: "#3e8ed0",
  },
  deletebutton: {
    padding: 10,
    width: 70,
    backgroundColor: "red",
  },
});

export default EditStudent;
