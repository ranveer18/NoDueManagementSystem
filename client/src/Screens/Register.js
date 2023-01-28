import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    if ((password && email && name && regNo && cpassword) == "") {
      setErrorMessage("Enter Required Data");
    } else if (password != cpassword) {
      setErrorMessage("Password Not Matched");
    } else {
      setErrorMessage("");
      navigation.navigate("Login");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Sign Up</Text>

      <TextInput
        placeholder="Name"
        placeholderTextColor="#C9DFFF"
        style={styles.input}
        autoCorrect={true}
        autoCapitalize={false}
        value={name}
        onChangeText={(text) => {
          setName(text);
        }}
      />
      <View style={styles.line}></View>
      <TextInput
        placeholder="Email"
        placeholderTextColor="#C9DFFF"
        style={styles.input}
        autoCorrect={true}
        autoCapitalize={false}
        autoCompleteType="email"
        keyboardType="email-address"
        textContentType="emailAddress"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      <View style={styles.line}></View>

      <TextInput
        placeholder="Registration Number"
        placeholderTextColor="#C9DFFF"
        style={styles.input}
        textContentType="text"
        value={regNo}
        onChangeText={(text) => {
          setRegNo(text);
        }}
      />
      <View style={styles.line}></View>
      <TextInput
        placeholder="Password"
        placeholderTextColor="#C9DFFF"
        style={styles.input}
        secureTextEntry={true}
        textContentType="password"
        value={password}
        onChangeText={(text) => {
          setPassword(text);
        }}
      />
      <View style={styles.line}></View>
      <TextInput
        placeholder="Confirm Password"
        placeholderTextColor="#C9DFFF"
        style={styles.input}
        secureTextEntry={true}
        textContentType="password"
        value={cpassword}
        onChangeText={(text) => {
          setCPassword(text);
        }}
      />
      <View style={styles.line}></View>

      <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
        <Text style={styles.loginButtonText}>Submit</Text>
      </TouchableOpacity>
      <Text style={{ padding: 10 }}>
        {errorMessage ? (
          <Text style={{ color: "red" }}>{errorMessage}</Text>
        ) : null}
      </Text>

      <View style={styles.signUpTextView}>
        <Text style={styles.signUpText}>Already Have an account?</Text>
        <TouchableOpacity
          style={styles.signUpBtn}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={[styles.signUpText, { color: "#C9DFFF" }]}>
            {" Sign in"}
          </Text>
          <AntDesign name="right" style={styles.arrow} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
    backgroundColor: "#333",
  },
  text: {
    alignSelf: "flex-start",
    color: "#C9DFFF",
    fontSize: 16,
    fontWeight: "400",
    paddingHorizontal: 10,
  },
  line: {
    width: 350,
    height: 1,
    alignSelf: "center",
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  loginText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 50,
    alignSelf: "center",
  },
  input: {
    width: "100%",
    height: 50,
    // backgroundColor: "#F0F4FA",
    borderRadius: 6,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#fff",
  },
  fpText: {
    alignSelf: "flex-end",
    color: "#C9DFFF",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  loginButton: {
    alignSelf: "center",
    backgroundColor: "#111",
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 50,
    width: 200,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#C9DFFF",
    alignSelf: "center",
  },

  signUpTextView: {
    marginTop: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 10,
  },
  signUpText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "400",
  },
  signUpBtn: {
    paddingVertical: 10,
    flexDirection: "row",
  },
  arrow: {
    fontSize: 14,
    paddingVertical: 8,
    paddingHorizontal: 12,
    color: "#C9DFFF",
  },
});

export default Register;
