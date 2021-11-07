import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from "../firebase";

const AddChat = ({ navigation }) => {
  const [input, setInput] = useState();
  const createChat = async () => { 
      await db.collection('chats').add({
          chatName: input
      }).then(()=> {
          navigation.goBack();  
      }).catch(error => alert(error))
  };
  return (
    <View style={styles.container}>
      <Input
        leftIcon={<Icon name="wechat" size={24} color="black" />}
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(input) => setInput(input)}
        onSubmitEditing={createChat}
      />
      <Button onPress={createChat} title="Create new Chat" />
    </View>
  );
};

export default AddChat;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 30,
        height:"100%"
    }
});
