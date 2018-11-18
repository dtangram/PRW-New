import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import EditableText from 'react-native-inline-edit'


class EditPlugin extends Component{

  // <EditableText
  //   text={'textOfTheField'}, //required
  //   sendText={() => sendText()}, //required
  //
  //   loading: isLoading, //optional false
  //   isTextEditable: true, // optional true
  //   textProps: {}, // optional empty
  //   textInputProps: {}, //optional empty
  // />



  render(){
    return(
      <View style={styles.myForm}>
      <Text>Testing</Text>
        <EditableText
          text={'textOfTheField'},
          sendText={() => sendText()}, 
        />
      </View>
    )
  }
}

export default EditPlugin

const styles = StyleSheet.create({
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
    inline:{
        // fontFamily:'Bodoni 72 Smallcaps',
        backgroundColor: 'yellow',
        minWidth: 150,
        display: 'inline-block',
        margin: 0,
        padding: 0,
        fontSize: 15,
        outline: 0,
        border: 0
    },
});
