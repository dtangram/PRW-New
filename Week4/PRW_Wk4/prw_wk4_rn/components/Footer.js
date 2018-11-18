import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  // TextInput,
  // TouchableOpacity,
  // TouchableHighlight
} from 'react-native'
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

class Footer extends Component{
  render(){
    return(
      <View style={styles.footer}>
        <Text style={styles.footerText}>Mind Palace.</Text>
      </View>
    )
  }
}

export default Footer

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    footer: {
        marginTop: 3,
        alignItems:'center',
        justifyContent:'center',
        height: 35,
        backgroundColor: '#36648B',
    },
    footerText:{
        fontFamily:'Helvetica-Bold',
        color:'white',
    },
});
