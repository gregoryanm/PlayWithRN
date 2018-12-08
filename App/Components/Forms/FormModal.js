import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,TouchableHighlight, Modal
} from 'react-native';

export default class CustomModal extends React.Component{
    handleClose(){
      this.props.onHidePicker && this.props.onHidePicker();
    }
  
    render(){
      return <Modal transparent={true}>
      <View style={{padding:20, flex:1, justifyContent:'center', backgroundColor:'rgba(43, 48, 62, 0.57)'}}>
      <View
        style={{
          backgroundColor:'white',
          borderRadius: 8,
          flexDirection:'column',
      }}
        >
  
        <Text style={{
          textAlign: 'center',
          marginTop:10,
          paddingTop:10,
          paddingBottom:10,
          fontSize:18
        }}>A Custom Wrapper for your picker</Text>
  
        {this.props.children}
      <TouchableHighlight
        onPress={this.handleClose.bind(this)}
      underlayColor='#78ac05'>
      <View style={{
          flex:1, alignItems:'center'
        }}><Text style={{fontSize:19,padding:15,}}>Close</Text></View></TouchableHighlight>
        </View>
        </View>
      </Modal>
    }
  }