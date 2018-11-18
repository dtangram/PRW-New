import React, {Component} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, AsyncStorage } from 'react-native'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import GroceriesList from '../components/GroceriesList'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


class GroceriesScreen extends Component {
  state = {
    groceriesArray: [
      {
        'itemName': 'Milk',
      }
    ],
    itemText: ''
  }

  static navigationOptions ={
   tabBarLabel:'Groceries',
   tabBarIcon: ({ tintColor }) => {
       return (
           <MaterialIcons
               name="local-grocery-store"
               size={26}
               style={{ color: tintColor }} >
           </MaterialIcons>
       );
     }
   }

   componentWillMount(){
     this.getItems()
   }

    addItem = (key) => {
        let itemText = this.state.itemText

        if(itemText.length <= 0){
          alert("Please enter an item")
          return false
        }

        if(itemText.length < 3 && itemText.length > 0){
          alert("Item must be at least 3 characters")
          return false
        }

        if(itemText){
            AsyncStorage.setItem('itemText', itemText)
            this.state.groceriesArray.push({'itemName': this.state.itemText})
            this.setState({'groceriesArray': this.state.groceriesArray})
            this.setState({itemText: ''})
        }
    }

    getItems = () => {
       AsyncStorage.getItem('itemText').then((itemText)=>{
           this.setState({'itemName': itemText})
           this.state.groceriesArray.push({'itemName': itemText})
           this.setState({'groceriesArray': this.state.groceriesArray})
           this.setState({itemText: ''})
       })
     }


    delItem = (key) => {
        this.state.groceriesArray.splice(key, 1)
        let itemText = this.state.itemText
        AsyncStorage.setItem('itemText', itemText)
        this.setState({groceriesArray: this.state.groceriesArray})
    }

    editItem = (key) => {
        this.state.groceriesArray.splice(key, 1)
        let itemText = this.state.itemText
        AsyncStorage.setItem('itemText', itemText)
        this.setState({groceriesArray: this.state.groceriesArray})
    }

    render() {
        let myItems = this.state.groceriesArray.map((val, key) => {
            return <GroceriesList val={val} id={key} key={key} delMe={() => this.delItem(key)}
              editMe={() => this.editItem(key)}/>
        })
        return (
            <View style={styles.container}>
              <Header title='My Groceries' />
              <View style={styles.myForm}>
                <TextInput
                  style={styles.textInput} underlineColorAndroid="transparent"
                 placeholder="Add Item"
                 onChangeText={(itemText)=>this.setState({itemText})}
                 value={this.state.itemText}/>
                 <TouchableOpacity onPress={this.addItem}>
                   <Text style={styles.button}>
                       Submit
                   </Text>
                 </TouchableOpacity>

              </View>
              <View style={styles.myForm}>
                <Text style={styles.h2}>Your Groceries</Text>
              </View>
              <ScrollView style={styles.scrollView}>{myItems}
              </ScrollView>
              <Footer />
            </View>
        )
    }
}

export default GroceriesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    myForm: {
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'center',
      paddingTop: 30,
    },
    textInput:{
      borderWidth: .5,
      borderColor:'black',
      justifyContent: 'center',
      width: 150,
      height: 50,
      marginTop: 15,
      marginBottom: 15,
      flexDirection: 'row',
      padding: 5,
    },
    button:{
      fontSize: 18,
      textAlign:'center',
      borderWidth: 3,
      borderColor: 'black',
      padding: 10,
      marginLeft: 30,
    },
    scrollView:{
        height: 430,
    },
    h2:{
      fontSize: 20,
      fontWeight: 'bold',
      paddingBottom: 35,
      paddingLeft: 10,
      paddingTop: 10,
      justifyContent:'center',
    }
});
