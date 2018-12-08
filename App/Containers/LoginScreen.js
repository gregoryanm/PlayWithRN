import React, {Component} from 'react'
import {
    ScrollView,
    View,
    Text,
    KeyboardAvoidingView,
    Touableopa,
    Button,
    Image,
    TouchableOpacity
} from 'react-native'
import {connect} from 'react-redux'
import {Images} from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :) import
// YourActions from '../Redux/YourRedux'
import LoginForm from '../Components/Forms/LoginForm'
// Styles
import styles from './Styles/LoginScreenStyle'

// import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from
// 'react-native-button-component';

class LoginScreen extends Component {

    _submithandle = () => {
        this
            .props
            .navigation
            .navigate('MainScreen')
    }
    render() {
        return (

            <View style={styles.mainContainer}>

                <Image
                    source={Images.background}
                    style={styles.backgroundImage}
                    resizeMode='stretch'/>
                <KeyboardAvoidingView behavior='position'>
                    <ScrollView style={styles.container}>

                        <View style={styles.centered}>
                            <Image source={Images.launch} style={styles.logo}/>
                        </View>

                        <View style={styles.section}>
                            <Image source={Images.ready}/>

                            <LoginForm/>

                        </View>

                    </ScrollView>
                </KeyboardAvoidingView>
                <View style={styles.centered}>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('SignUpScreen')}>
                        <Text
                            style={{
                            color: "white"
                        }}>Sign Up!</Text>
                    </TouchableOpacity>
                    <View
                        style={{
                        marginVertical: 3
                    }}/>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ResetScreen')}>
                        <Text
                            style={{
                            color: "white"
                        }}>Reset your account.</Text>
                    </TouchableOpacity>

                </View>
            </View>

        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
