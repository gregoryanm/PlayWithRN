import React, { Component } from 'react'
import { ScrollView, View, Text, KeyboardAvoidingView, Button , Image} from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MapScreenStyle'

class MapScreen extends Component {
  _submithandle = () => {

  }

  render () {
    return (
      <View style={styles.mainContainer}>
      <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
      <ScrollView style={styles.container}>
        <View style={styles.centered}>
          <Image source={Images.launch} style={styles.logo} />
        </View>

        <View style={styles.section} >
          <Image source={Images.ready} />
          <Text style={styles.sectionText}>
          Template Screen
          </Text>
          <Button
          onPress={this._submithandle}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen)
