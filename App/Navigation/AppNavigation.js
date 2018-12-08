import { createStackNavigator } from 'react-navigation'


//pull modal from forms
import ModalScreen from '../Containers/ModalScreen'
//Initials Load
import LaunchScreen from '../Containers/LaunchScreen'
import LoginScreen from '../Containers/LoginScreen'
import SignUpScreen from '../Containers/SignUpScreen'
import ResetScreen from '../Containers/ResetScreen'


//After Auth w/o Children
import MainScreen from '../Containers/MainScreen'
import ExploreScreen from '../Containers/ExploreScreen'
import SettingsScreen from '../Containers/SettingsScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  LoginScreen: { screen: LoginScreen },
  SignUpScreen: { screen: SignUpScreen },
  ResetScreen: { screen: ResetScreen },
  MainScreen: { screen: MainScreen },
  ExploreScreen: { screen: ExploreScreen },  
  SettingsScreen: { screen: SettingsScreen },
  ModalScreen: { screen: ModalScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
