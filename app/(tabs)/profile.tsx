import { View, Text } from "react-native";
import React from "react";
import { SignOutButton } from "@/components/SignOutButton";

export default function Profile() {
  return (
    <View>
      <Text>Profile screen</Text>
      <SignOutButton />
    </View>
  );
}
