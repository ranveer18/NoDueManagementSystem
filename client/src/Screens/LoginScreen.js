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
import { Icon } from "react-native-elements";

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
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        <Text style={styles.loginText}>Login</Text>
        <TextInput
          placeholder="Email Address"
          placeholderTextColor="#808e9b"
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
        <TextInput
          placeholder="Password"
          placeholderTextColor="#808e9b"
          style={styles.input}
          secureTextEntry={true}
          textContentType="password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <TouchableOpacity>
          <Text style={styles.fpText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        {errorMessage ? (
          <Text style={{ color: "red" }}>{errorMessage}</Text>
        ) : null}
        {/* Loginwith */}
        <View style={styles.loginWithBar}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="google" type="font-awesome" size={30} color="#808e9b" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon
              name="facebook-square"
              type="font-awesome"
              size={30}
              color="#808e9b"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="apple" type="font-awesome" size={30} color="#808e9b" />
          </TouchableOpacity>
        </View>
        <View style={styles.signUpTextView}>
          <Text style={styles.signUpText}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={[styles.signUpText, { color: "#C9DFFF" }]}>
              {" Sign Up"}
            </Text>
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
  welcomeText: {
    fontSize: 30,
    fontWeight: "900",
    color: "#fff",
    alignSelf: "center",
  },
  loginText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F0F4FA",
    borderRadius: 6,
    marginTop: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#808e9b",
  },
  fpText: {
    alignSelf: "flex-end",
    color: "#C9DFFF",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: "black",
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#C9DFFF",
    alignSelf: "center",
  },
  loginWithBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
  },
  iconButton: {
    backgroundColor: "#C9DFFF",
    padding: 14,
    marginHorizontal: 10,
    borderRadius: 100,
  },
  signUpTextView: {
    marginTop: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  signUpText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
});
