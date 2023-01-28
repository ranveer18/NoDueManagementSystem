import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  Alert,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  handleSubmit = () => {
    if (
      email === "VasooliBhai@gmail.com" &&
      password === "AayeChalHaftaNikal"
    ) {
      Alert.alert("Login Successfull");
      navigation.navigate("Home");
    } else {
      // Alert.alert("invalid login credintials");
      setErrorMessage("Invalid Login Credentials");
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        {/* <Text style={styles.welcomeText}>Welcome Back!</Text> */}
        <Text style={styles.loginText}>Sign In</Text>
        <Text style={styles.text}>Email</Text>
        <TextInput
          // placeholder="Email Address"
          placeholderTextColor="#fff"
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
        <Text style={styles.text}>Password</Text>

        <TextInput
          // placeholder="Password"
          // placeholderTextColor="#fff"
          style={styles.input}
          secureTextEntry={true}
          textContentType="password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <View style={styles.line}></View>

        <TouchableOpacity>
          <Text style={styles.fpText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        {errorMessage ? (
          <Text style={{ color: "red" }}>{errorMessage}</Text>
        ) : null}

        <View style={styles.signUpTextView}>
          <Text style={styles.signUpText}>Don't have an account?</Text>
          <TouchableOpacity
            style={styles.signUpBtn}
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text style={[styles.signUpText, { color: "#C9DFFF" }]}>
              {" Sign up"}
            </Text>
            <AntDesign name="right" style={styles.arrow} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
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
    marginBottom: 80,
    alignSelf: "center",
  },
  input: {
    width: "100%",
    height: 30,
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
