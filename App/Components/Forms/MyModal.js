import React, {Component} from 'react'
import {View, Text} from 'react-native'

class MyModal extends React.Component {
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
  
    render() {
      return (
<View>
<Text>
            Our goal is to create a digital presence that promotes the community and relationships thru Coupld Up’s digital marketing platform.
            </Text>

</View>

      );
    }
  }