import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

class Button extends Component{
  render(){
    return(
      <TouchableOpacity>
        <Text style={styles.button}>
            {this.props.title}
        </Text>
      </TouchableOpacity>
    )
  }
}

export default Button

const styles = StyleSheet.create({
  button:{
    fontSize: 18,
    textAlign:'center',
    borderWidth: 3,
    borderColor: 'black',
    padding: 10,
    marginLeft: 30,
  }
});
