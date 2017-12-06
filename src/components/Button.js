import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';


export default class Button extends Component {

  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onpress}>
        <Text style={styles.Text}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
  Text: {
    alignSelf: 'center',
    color: '#007aff',
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  }
});
