import { AppRegistry } from 'react-native'
import { DrawerNavigator } from 'react-navigation'
import HomeScreen from './views/home.js'

const RootDrawer = DrawerNavigator({
  Home: {
    screen: HomeScreen
  }
})

AppRegistry.registerComponent('Coloc', () => RootDrawer)
