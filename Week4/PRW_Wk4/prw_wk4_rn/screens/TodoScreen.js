import React, {Component} from 'react'
import {
    StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput, ScrollView, AsyncStorage, Alert
} from 'react-native'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import ToDoList from '../components/ToDoList'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EditItem from '../components/EditItem'
//import EditPlugin from '../components/EditPlugin'


class TodoScreen extends Component {
  state = {
    itemArray: [
      {
        'itemName': 'Homework',
      }
    ],
    todoItemText: '',
    showEdit: false,
  }

  static navigationOptions = {
    tabBarLabel: 'Todo List',
    tabBarIcon: ({ tintColor }) => {
      return (
        <MaterialIcons
            name="list"
            size={26}
            style={{ color: tintColor }} >
        </MaterialIcons>
      );
    }
  }

  componentWillMount(){
    this.getItems()
  }

  getItems(){
    AsyncStorage.getItem('todoItemText').then((todoItemText)=>{
      this.setState({'itemName': todoItemText})
      this.state.itemArray.push({'itemName': todoItemText})
      this.setState({'itemArray': this.state.itemArray})
      this.setState({itemName: ''})
    })
  }

  addItem = (key) => {
    let todoItemText = this.state.todoItemText

    if(todoItemText.length <= 0){
      alert("Please enter an item")
      return false
    }

    if(todoItemText.length < 3 && todoItemText.length > 0){
      alert("Item must be at least 3 characters")
      return false
    }

    if(todoItemText){
      this.state.itemArray.push({'itemName': todoItemText})
      this.setState({'itemArray': this.state.itemArray})
      this.setState({todoItemText: ''})
      AsyncStorage.setItem('todoItemText', todoItemText)
    }
  }

  delItem = (key) => {
    this.state.itemArray.splice(key, 1)
    let todoItemText = this.state.todoItemText
    AsyncStorage.setItem('todoItemText', todoItemText)
    this.setState({itemArray: this.state.itemArray})
  }

  editItem = (key) => {
    this.setState({
      showEdit: !this.state.showEdit
    })
  alert('Edit Me')
  }

  saveItem = (key) => {
    alert('Save Me')
  }

  render() {
    let myItems = this.state.itemArray.map((val, key) => {
      return (
        <ToDoList
          key={key}
          id={key}
          val={val}
          editMe={() => this.editItem(key)}
          delMe={() => this.delItem(key)} />
      )
    })

    return (
      <View style={styles.container}>
        <Header title='My ToDo List' />
        <View style={styles.myForm}>
          <TextInput underlineColorAndroid="transparent"
                    style={styles.textInput}
                    placeholder="Add Item"
                    onChangeText={(todoItemText)=>this.setState({todoItemText})} value={this.state.todoItemText} />
          <TouchableOpacity onPress={this.addItem}>
            <Text style={styles.button}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.myForm}>
          {this.state.showEdit ? <EditItem /> : null}
       </View>
     {/* <EditPlugin /> */}
        <View style={styles.myForm}>
          <Text style={styles.h2}>Your Todo List</Text>
        </View>
        <ScrollView style={styles.scrollView}>
          {myItems}
        </ScrollView>
        <Footer />
      </View>
    )
  }
}
export default TodoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
  //      backgroundColor: '#fff',
    },
    myForm: {
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'center',
      paddingTop: 30,
    },
    textInput:{
      borderWidth: .5,
      borderRightColor:'black',
      justifyContent: 'center',
      width: 150,
      height: 50,
      marginTop: 15,
      marginBottom: 15,
      flexDirection: 'row',
      padding: 5,
    },
    scrollView:{
        height: 430,
    },
    button:{
        // fontFamily:'Bodoni 72 Smallcaps',
        fontSize: 18,
        textAlign:'center',
        borderWidth: 3,
        borderColor: 'black',
        padding: 10,
        marginLeft: 30,
    },
    h2:{
      //YOU SHOULD USE ONLY ONE TO TWO FONTS IF POSSIBLE
      //  fontFamily:'Helvetica Neue',
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 35,
        paddingLeft: 10,
        paddingTop: 10,
        justifyContent:'center',
    }
});
