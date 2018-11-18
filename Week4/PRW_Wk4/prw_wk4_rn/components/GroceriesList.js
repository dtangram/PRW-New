import React, {Component} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

class GroceriesList extends Component{
    render(){
        const item= this.props.item

        return(
            <View style={styles.list} key={this.props.id}>
              <Text style={styles.listText}>Item: {this.props.val.itemName}</Text>
                <TouchableOpacity onPress={this.props.editMe}><MaterialIcons style={styles.button} name="edit" size={18}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.delMe}><MaterialIcons style={styles.button} name="delete" size={18}/>
                </TouchableOpacity>
            </View>
        )
    }
}

export default GroceriesList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listText:{
      fontFamily:'Helvetica-Bold',
      fontSize: 18,
        textAlign:'center',
    },
    list: {
        paddingBottom: 15,
        flexDirection: 'row',
        justifyContent:'center'
    },
    button:{
        paddingLeft: 3,
    }
});
