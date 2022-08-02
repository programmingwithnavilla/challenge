import {
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC, useEffect, useState } from "react";
import { Text } from "../../components/Themed";
import ApiCall from "../../utils/ApiCall";

const UserDetail: FC<any> = ({ route, navigation }) => {
  const { userId } = route.params;
  let [user, setUser] = useState<{ [key: string]: any }>({});
  console.log();
  useEffect(() => {
    console;
    ApiCall({
      url: `users/${userId}`,
    })
      .then((res) => {
        console.log(user);
        setUser(res);
      })
      .catch((err) => console.warn("error", err));
  }, []);

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{
              uri: user.image,
            }}
          />

          <Text style={styles.name}>{user?.firstName}</Text>
          <Text style={styles.name}>{user?.lastName}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.textInfo}>age: {user?.age}</Text>
      </View>
      <View>
        <Text style={styles.textInfo}>
          address: {user.company?.address?.address}
        </Text>
        <Text style={styles.textInfo}>
          postal: {user.company?.address?.postalCode}
        </Text>
        <Text style={styles.textInfo}>
          state: {user.company?.address?.state}
        </Text>
      </View>
    </View>
  );
};

export default UserDetail;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#4D243D",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  textInfo: {
    fontSize: 24,
    marginTop: 20,
    color: "#696969",
    paddingHorizontal: 8,
  },
});
