import React, {Component} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Header from '../components/Header'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

class OverviewScreen extends Component {
   static navigationOptions = {
       tabBarLabel: 'Overview',
       tabBarIcon: ({ tintColor }) => {
           return (
               <MaterialIcons
                   name="home"
                   size={26}
                   style={{ color: tintColor }} >
               </MaterialIcons>
           );
       }
   }
    render() {
      return (
        <View style={styles.container}>
          <Header />
          <View style={styles.iwouldstylethis}>
            <Image style={styles.image}
            source={require('../images/florian.jpg')} />
            <Text style={styles.h3}>Welcome to Mind Palace.</Text>
            <Text style={styles.p1}>We help you keep track of things.</Text>
              <Text style={styles.p2}>Feeling cluttered? Store some items here.</Text>
              <Text style={styles.p3}>Add to your todo or grocery list.</Text>
          </View>
        <View style={styles.buttonPos}>
          <TouchableOpacity onPress={this.addItem}>
            <Text style={styles.button}>
                Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.skip}>
          <Text style={styles.skipText}>skip</Text>
        </View>
      </View>
    )
  }
}

export default OverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    h3:{
        fontFamily:'Futura',
        fontSize: 25,
        textAlign:'center',
        marginTop: 20,
    },
    p1:{
      fontFamily: 'Helvetica Neue',
        fontSize: 16,
        textAlign:'center',
        marginTop: 20,
        paddingBottom: 3,
    },
    p2:{
        fontFamily: 'Helvetica Neue',
        fontSize: 16,
        textAlign:'center',
        marginBottom: 3,
    },
    p3:{
        fontFamily: 'Helvetica Neue',
        fontSize: 16,
        textAlign:'center',
        marginBottom: 3,
    },
    skip:{
        flexDirection:'row',
        marginLeft:300,
        paddingTop:25,
    },
    skipText:{
        fontFamily:'Helvetica-Bold',
        color:'#36648B',
        fontSize: 16,
    },
    button:{
        paddingTop: 10,
        color:'white',
        backgroundColor:'#36648B',
        overflow:'hidden',
        borderRadius: 10,
        borderWidth:1,
        fontSize:20,
        height: 50,
        width: 300,
        textAlign:'center',
    },
    buttonPos:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop: 30,
    },
    image:{
        flexDirection:'row',
        width: 300,
        height: 200,
        resizeMode:'contain',
        marginTop: 50,
    },
    // header: {
    //     height: 35,
    //     paddingTop: 60,
    //     flexDirection:'row',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor:'#36648B',
    // },
    iwouldstylethis: {
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
    }
});
