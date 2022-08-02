import React from "react"
import { StyleSheet, Image, SafeAreaView, FlatList } from 'react-native';
import { Text, View } from '../../components/Themed';
import axios from 'axios';

interface Props {
  navigation: any
}
interface State {
  userList: any
}
class Gallery extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
          userList : []
        }
    }
    componentDidMount() {
      axios({
        method: 'get',
        url: 'https://reqres.in/api/users/',
      }).then((res: any) => {
        console.log("sasa", res.data.data)
        this.setState({
          userList : res.data.data
        })
      });
    }
    renderItem = (user: any) => {
      const {item, index, } = user;
      return(
        <>
        <View style={styles.card_template}>
        <Image 
        style={styles.card_image}
        source={{uri: item.avatar}}
    />
      </View>
         <View style={styles.text_container}>
      <Text style={styles.card_title}>{`${item.first_name}  ${item.last_name}`}</Text>
          </View>
        </>

      )
    }
    render(){
        const {userList} = this.state;
        return(
          <SafeAreaView style={styles.container}>
          <FlatList
            data={userList}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card_template:{
    width: 400,
    height: 250,
    boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)"
  },
  card_image: {
    width: 250,
    height: 250,
    borderRadius : 10,
    marginVertical:10
  },
  text_container:{
    position: "absolute",
    width: 250,
    height: 30,
    bottom:0,
    padding: 5,
    backgroundColor: "rgba(0,0,0, 0.3)",
    borderBottomLeftRadius : 10,
    borderBottomRightRadius: 10
  },
  card_title: {
     color: "white",

  },

});

export default Gallery;
