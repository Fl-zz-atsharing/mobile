/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import axios from 'axios'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: 'Salut'
    }
  }

  render () {
    let self = this
    axios('https://api.sillypixel.fr/').then(res => {
      self.setState({text: res.data.message})
    }).catch(err => console.log(err))
    return (
      <View style={styles.container}>
        <Text>{self.state.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})
