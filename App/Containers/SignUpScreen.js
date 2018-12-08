import React, { Component } from 'react'
import { ScrollView,View, Text, KeyboardAvoidingView,TouchableOpacity,  Button, Image } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import SignUpForm from '../Components/Forms/SignUp'
// Styles
import styles from './Styles/SignUpScreenStyle'

class SignUpScreen extends Component {
  _submithandle = () => {

  }

  render () {
    return (
      <View style={styles.mainContainer}>
      <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
      <ScrollView style={styles.container}>
        <View style={styles.centered}>
          {/* <Image source={Images.registration} style={styles.logo} /> */}
          <Image source={Images.registration}  style={styles.header} />
        </View>

        <View style={styles.section} >
      

          
          <SignUpForm/>
 
        </View>
        <View style={styles.centered}>
        <TouchableOpacity
       onPress={() =>  this.props.navigation.navigate('LoginScreen') 
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)
