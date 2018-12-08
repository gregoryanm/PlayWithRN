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

//Test
import ListviewExampleScreen from '../Containers/ListviewExample'
import ListviewGridExampleScreen from '../Containers/ListviewGridExample' //movies
import ListviewSectionsExampleScreen from '../Containers/ListviewSectionsExample'


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
  ListviewExampleScreen: { screen: ListviewExampleScreen },
  ListviewGridExampleScreen: { screen: ListviewGridExampleScreen },
  ListviewSectionsExampleScreen: { screen: ListviewSectionsExampleScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ListviewGridExampleScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
