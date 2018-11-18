import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'

class EditItem extends Component{
  render(){
    //const item= this.props.item

    return(
      <View style={styles.myForm}
        key={this.props.id}>
        <TextInput style={styles.textInput} />
        <TouchableOpacity onPress={this.props.saveMe}>
          <Text style={styles.button}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default EditItem

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
    button:{
        // fontFamily:'Bodoni 72 Smallcaps',
        fontSize: 18,
        textAlign:'center',
        borderWidth: 3,
        borderColor: 'black',
        padding: 10,
        marginLeft: 30,
    },
});
