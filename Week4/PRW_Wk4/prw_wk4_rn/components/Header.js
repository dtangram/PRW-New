import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

class Header extends Component{
  render(){
    return(
      <View style={styles.header}>
        <Text style={styles.headerText}> {this.props.title}</Text>
      </View>
    )
  }
}

export default Header

const styles = StyleSheet.create({
    header:{
      paddingBottom: 10,
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#36648B',
    },
    headerText:{
        fontSize: 30,
        paddingTop:'10%',
        alignItems:'center',
        justifyContent:'center',
        fontFamily:'Helvetica-Bold',
        color:'#FFFFFF',
    }
});
