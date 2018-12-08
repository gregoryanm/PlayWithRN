import React, { Component } from 'react'
import { ScrollView, View, Text, KeyboardAvoidingView, Button , Image, Platform, DatePickerAndroid } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import SettingsForm from '../Components/Forms/Settings'
// Styles
import styles from './Styles/SettingsScreenStyle'
import moment from 'moment'




class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Example'
  };
  _submithandle = () => {

  }
  constructor(props, context) {
    super(props, context)
    this.state = {
      form: {
        fullName: 'Marco Polo',
        tos: false,
        lastSubmitValues: ''
      }
    }
  }

  handleValueChange(values) {
    console.log('handleValueChange', values)
    this.setState({ form: values })
  }

  render () {
    const { fullName, tos, gender } = this.state.form
    console.log('render', this.state.form)
    
    return (
      <View style={styles.mainContainer}>
      <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
      <ScrollView style={styles.container}>
      <KeyboardAvoidingView behavior='padding'>

        {/* <View style={styles.centered}>
          <Image source={Images.launch} style={styles.logo} />
        </View> */}
{/* <EventLocator/> */}
        <View style={styles.section}><Image source={Images.ready} /></View>
        <SettingsForm/>
</KeyboardAvoidingView>
</ScrollView>

</View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)
