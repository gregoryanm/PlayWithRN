import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Button } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {

  _submithandle = () => {
    this.props.navigation.navigate('LoginScreen')
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
            Our goal is to create a digital presence that promotes the community and relationships thru Coupld Up’s digital marketing platform.
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
