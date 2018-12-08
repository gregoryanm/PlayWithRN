import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Button } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ModalScreenStyle'

class ModalScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('getTitle')(),
      headerLeft: (
        <Button
          onPress={() => {
            navigation.getParam('onClose')(null, navigation);
          }}
          title='Back'
        />
      ),
      headerRight: (
        <Button
          onPress={() => {
            navigation.getParam('onClose')(null, navigation);
          }}
          title='Save'
        />
      )
    };
  };

  render () {
    // return (
      return this.props.navigation.getParam('renderScene')();
      // <ScrollView style={styles.container}>
      //   <KeyboardAvoidingView behavior='position'>
      //     <Text>ModalScreen</Text>
      //   </KeyboardAvoidingView>
      // </ScrollView>
    // )
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalScreen)
