import React from "react";
import { Button,  View } from "react-native";
import { registerRootComponent } from "expo";
import registerNNPushToken from "native-notify";

export default function index (){
  registerNNPushToken(25256, "dZeBOhkejo6bhGHDD8roNE");

  return (
    <View className="flex justify-center items-center mx-auto w-full h-full">
      <Button
        // onPress={onPres  sLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />{" "}
    </View>
  );
};


registerRootComponent(index);
