import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, KeyboardAvoidingView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Input, Text, Button } from "react-native-elements";
import { auth } from "../firebase";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [imageUrl, setImageUrl] = useState();

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL:
            imageUrl ||
            "https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png",
        });
      })
      .catch((error) => alert(error.message));
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Login",
    });
  }, [navigation]);
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create a Signal account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Full Name"
          autofocus
          type="text"
        />
        <Input
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          type="email"
        />
        <Input
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          type="password"
          secureTextEntry
        />
        <Input
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          placeholder="Profile Picture URL (optional)"
          type="text"
          onSubmitEditing={register}
        />
      </View>
      <Button
        title="Register"
        raised
        onPress={register}
        containerStyle={styles.button}
      />
      <View style={{ height: 10 }}></View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  button: { width: 200, marginTop: 10 },
});
