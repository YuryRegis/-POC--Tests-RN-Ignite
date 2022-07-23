import React from "react";
import { View, Text, TextInput, Button } from "react-native";

function Profile() {
  return (
    <View>
      <Text testID="text-title">Profile</Text>

      <TextInput
        value="Harry"
        testID="input-name"
        autoCorrect={false}
        placeholder="Enter your name"
      />

      <TextInput
        value="Potter"
        testID="input-surname"
        placeholder="Enter your last name"
      />

      <Button title="Save" onPress={() => {}} />
    </View>
  );
}

export default Profile;
