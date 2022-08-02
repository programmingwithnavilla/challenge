import React, { useState, useEffect } from "react";
import { Text, View } from "./Themed";
import { Button } from "react-native";

const Counter = ({
  name = "Navid",
  onNameChange = () => console.warn("it has not a function"),
  counterValue = 1000,
}) => {
  const [counterNumber, setCounterNumber] = useState(counterValue);
  const [filterObject, setFilter] = useState({
    name: "",
    lastName: "",
  });
  useEffect(() => {
    console.log("did mount");
  }, []);

  useEffect(() => {
    console.log("did update", counterNumber);
  }, [counterNumber]);
  useEffect(() => {
    console.log("did update", counterNumber);
    return () => {
      console.log('component wilmoiunt')
    };
  }, [filterObject]);

  return (
    <View>
      <Text>counter {name}</Text>
      <Button
        title="set Props"
        onPress={() => setCounterNumber(counterNumber + 1)}
      />
      <Text>this is a number {counterNumber}</Text>
    </View>
  );
};

export default Counter;
