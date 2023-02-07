import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState, useEffect } from "react";

const ViewStudent = ({ route }) => {
  const navigation = useNavigation();
  const [user, setUser] = useState("");
  const { id } = route.params;
  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    try {
      const response = await axios.get(
        `http://192.168.0.105:5050/api/v1/student/${id}`
      );
      setUser(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Text>Name: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Phone: {user.phone}</Text>
      <Text>Registration: {user.registration}</Text>
      <Text>Batch: {user.batch}</Text>
      <Text>Branch: {user.branch}</Text>
    </View>
  );
};

export default ViewStudent;
