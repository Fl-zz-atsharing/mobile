import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Basket extends Component {
  render () {
    console.log('test')
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Basket</Text>
      </View>
    )
  }
}
