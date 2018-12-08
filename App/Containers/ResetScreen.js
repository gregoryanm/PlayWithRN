import React, { Component } from 'react'
import { ScrollView,View, Text, KeyboardAvoidingView,TouchableOpacity,  Button, Image } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
// import ResetForm from '../Components/Forms/Reset'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ResetScreenStyle'

class ResetScreen extends Component {

  _submithandle = () => {
    
  }

  render () {
    return (
      <View style={styles.mainContainer}>
      <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
      <ScrollView style={styles.container}>
        <View style={styles.centered}>
          {/* <Image source={Images.registration} style={styles.logo} /> */}
          <Image source={Images.logotext} style={styles.logo} />
          <Image source={Images.resetaccount}  style={styles.header} />
        </View>

        <View style={styles.section} >
      
      
          
          {/* <ResetForm/> */}
      
          <Button
          onPress={this._submithandle}
          title="Reset Password"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          />
          <View style={{marginVertical: 3}}/>

        </View>
        <View style={styles.centered}>
     
      <TouchableOpacity
       onPress={() =>  this.props.navigation.navigate('SignUpScreen') 
    }
    >
      <Text style={{color: "white"}}>Sign up!</Text>
      </TouchableOpacity>
      <View style={{marginVertical: 3}}/>
        <TouchableOpacity
       onPress={() =>  this.props.navigation.navigate('ResetScreen') 
    }
    >
      <Text style={{color: "white"}}>Have an existing account?</Text>
      </TouchableOpacity>
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(ResetScreen)
