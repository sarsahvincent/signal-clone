import React, { useState, useEffect, useLayoutEffect } from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import { Input, Image, Button } from "react-native-elements";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
  };


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log("user", authUser);
        navigation.replace("Home");
      } else {
        return unsubscribe;
      }
    });
  }, []);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
        }}
        style={styles.image}
      />
      <View style={styles.inputContainer}>
        <Input
          leftIcon={<Icon name="envelope" size={24} color="#2C6BED" />}
          placeholder="Email"
          autofocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          leftIcon={<Icon name="lock" size={24} color="#2C6BED" />}
          placeholder="Password"
          secureTextEntry
          autofocus
          type="password"
          value={password}
          onChangeText={(password) => setPassword(password)}
          onSubmitEditing={signIn}
        />
        <View style={styles.buttonContainer}>
          <Button
            onPress={signIn}
            containerStyle={styles.button}
            title="Login"
            raised
          />
          <Button
            containerStyle={styles.button}
            type="outline"
            title="Register"
            onPress={() => navigation.navigate("Register")}
          />
        </View>
      </View>
      <View style={{ height: 20 }}></View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  image: {
    width: 200,
    height: 200,
  },
  inputContainer: {
    width: 300,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: { width: 200, marginTop: 10 },
});
