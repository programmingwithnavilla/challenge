import {
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { FC, useEffect, useState } from "react";
import { Text } from "../../components/Themed";
import ApiCall from "../../utils/ApiCall";
import { IUser } from "../../interface/screens";

const Users: FC<any> = ({ navigation }) => {
  let [userList, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    ApiCall({
      url: "users",
    })
      .then((res) => setUsers(res.users))
      .catch((err) => console.warn("error", err));
  }, []);

  const renderItem = (user: any) => {
    const { item, index } = user;
    return (
      <>
        <TouchableOpacity
          style={styles.card_template}
          onPress={() => {
            navigation.navigate("UserDetail", {
              userId: item.id,
            });
          }}
        >
          <Image style={styles.card_image} source={{ uri: item.image }} />
          <Text
            style={styles.card_title}
          >{`${item.firstName}  ${item.lastName}`}</Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <FlatList
      numColumns={2}
      data={userList}
      style={styles.container}
      renderItem={renderItem}
    />
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  card_template: {
    backgroundColor: "#4D243D",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 1,
    height: Dimensions.get("window").width / 2, // approximate a square
  },
  card_image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginVertical: 10,
  },
  card_title: {
    color: "white",
  },
});
