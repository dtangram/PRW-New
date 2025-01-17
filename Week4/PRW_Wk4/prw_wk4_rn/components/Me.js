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






var TextInput = React.createClass({
  handleInput: function() {
    var input = React.findDOMNode(this.refs.userInput)
    this.props.saveInput(input.value)
    input.value = ''
  },
  render: function() {
    var label = this.props.label
    return (
      <div class="form-group">
        <h3><label for="input-{ label }">{ label }</label></h3>
        <input
          type="text"
          class="form-control"
          id="input-{ label }"
          ref="userInput"
         />
        <button onClick={ this.handleInput }>Save</button>
      </div>
    )
  }
})

var TextField = React.createClass({
  render: function() {
    var label = this.props.label || 'Label'
    var text = this.props.text || 'Nothing yet'
    return (
      <div>
        <h3>{ label }</h3>
        <p>{ text }</p>
      </div>
    )
  }
})

var Form = React.createClass({
  getInitialState: function() {
    return {
      userIsEditing: false,
      favoriteFlavor: 'Vanilla'
    }
  },
  toggleEditing: function() {
    var userIsEditing = !this.state.userIsEditing
    this.setState({
      userIsEditing: userIsEditing
    })
    this.handleSave()
  },
  saveInput: function(input) {
    this.setState({
      favoriteFlavor: input
    })
  },
  render: function() {
    var userIsEditing = this.state.userIsEditing
    if (userIsEditing) {
        return (
          <div>
            <TextInput
              label={ 'Favorite flavor' }
              saveInput={ this.saveInput }
             />
            <button onClick={ this.toggleEditing }>Done</button>
          </div>
        )
    }
    return (
      <div>
        <TextField
          label={ 'Favorite flavor' }
          text={ this.state.favoriteFlavor }
        />
        <button onClick={ this.toggleEditing }>Edit</button>
      </div>

    )
  }
})

React.render(<Form />, document.getElementById('app'))
