import { AppRegistry } from 'react-native'
import { DrawerNavigator } from 'react-navigation'

import HomeScreen from './views/home'
import Basket from './views/basket'

const RootDrawer = DrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  basket: {
    screen: Basket
  }
})

AppRegistry.registerComponent('Coloc', () => RootDrawer)
