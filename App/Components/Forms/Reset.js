import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
  AppRegistry,
  StyleSheet,
  Text, Platform,
  View,ScrollView,TouchableHighlight, Modal
} from 'react-native';

import { Form, InputField,Separator } from 'react-native-form-generator'
import { Icon } from 'expo'

export default class FormView extends React.Component{


  
  // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }



  constructor(props){
    super(props);
    this.state = {
      formData:{}
    }
  }
     
    // this.setState({formData: formData})
    // this.props.onFormChange && this.props.onFormChange(formData);
  

  handleFormFocus(event, reactNode){
  
 }

 handleFormChange(formData){
  //formData will be a json object that will contain
  // refs of every field
  // console.warn(formData.first_name)
  // formData.last_name
}

  openTermsAndConditionsURL(){
  }

  resetForm(){
    this.refs.registrationForm.refs.first_name.setValue("");
    this.refs.registrationForm.refs.last_name.setValue("");
    this.refs.registrationForm.refs.other_input.setValue("");
    this.refs.registrationForm.refs.meeting.setDate(new Date());
    this.refs.registrationForm.refs.has_accepted_conditions.setValue(false);

  }

  render(){
    let formStyles = StyleSheet.create({
      alignRight:{
        marginTop: 7, position:'absolute', right: 10, color:'white'
      }
    });
    return (
    
      <Form
      ref='registrationForm'
      onFocus={this.handleFormFocus.bind(this)}
      onChange={this.handleFormChange.bind(this)}
      label="Personal Information">
      <InputField 
       style={{color: 'white'}}
           ref='first_name' 
          //  label='First Name' 
           placeholder='Email Address'
           iconRight={
            <Icon.Ionicons        
            name={
              Platform.OS === 'ios' ? 'ios-mail' : 'md-mail'
            }           
            value={this.state.value} 
            size={30}  
            style={[
              formStyles.alignRight,{color: '#C7C7CC'},
              this.props.iconStyle]}/>
        }
           />      
     <Separator/>
</Form>

      );

    }

  }
  