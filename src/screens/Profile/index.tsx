import React from "react";
import { View, Text, TextInput, Button } from "react-native";

function Profile() {
  return (
    <View>
      <Text>Profile</Text>

      <TextInput placeholder="Enter your name" autoCorrect={false} />

      <TextInput placeholder="Enter your last name" />

      <Button title="Save" onPress={() => {}} />
    </View>
  );
}

export default Profile;
