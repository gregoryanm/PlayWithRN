import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
  AppRegistry,
  StyleSheet,
  Text, Platform,
  View,ScrollView,TouchableHighlight, Modal
} from 'react-native';


import { Form,
  Separator,InputField, LinkField,
  SwitchField, PickerField, DatePickerField,
  TimePickerField, CountDownField
} from 'react-native-form-generator';

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

    let workingValidator = (value)=>{
      if(value == '') return "Required";
      //Initial state is null/undefined
      if(!value) return true;
      var matches = value.match(/\d+/g);
      if (matches != null) {
        return "First Name can't contain numbers";
      }
    
      return true;
    }
    return (
    
      <Form
      ref='registrationForm'
      onFocus={this.handleFormFocus.bind(this)}
      onChange={this.handleFormChange.bind(this)}
      label="Personal Information">


     <InputField
       labelStyle={{color:'white'}}
          ref='first_name'
          style={{color: 'white'}}
          // label='First Name'
          placeholder='First Name'

          iconRight={<Icon.Ionicons        
          name={
            Platform.OS === 'ios' ? 'ios-person' : 'md-person'
          }           
          value={this.state.value} 
          size={30}  
          style={[  formStyles.alignRight,
            {marginTop:7, color:"#C7C7CC" },
            ((self)=>{
              //i can change the style of the component related to the attibute of example_input_field
              if(!!(self.refs && self.refs.first_name)){
                if(!self.refs.example_input_field.valid) return {color:'#d52222'}
              }
              }
            )(this)]}
            />}

          helpText={((self)=>{

            if(Object.keys(self.refs).length !== 0){
              if(!self.refs.registrationForm.refs.first_name.valid){
                return self.refs.registrationForm.refs.first_name.validationErrors.join("\n");
              }
            }
            // if(!!(self.refs && self.refs.first_name.valid)){
            // }
          })(this)}
          validationFunction={[(value)=>{
            /*
            you can have multiple validators in a single function or an array of functions
             */

            if(value == '') return "Required";
            //Initial state is null/undefined
            if(!value) return true;
            // Check if First Name Contains Numbers
            var matches = value.match(/\d+/g);
            if (matches != null) {
                return "First Name can't contain numbers";
            }

            return true;
          }, (value)=>{
            ///Initial state is null/undefined
            if(!value) return true;
            if(value.indexOf('4')!=-1){
              return "I can't stand number 4";
            }
            return true;
          }]}
          
          />

 <InputField
       labelStyle={{color:'white'}}
          ref='last_name'
          style={{color: 'white'}}
          // label='First Name'
          placeholder='Last Name'

          iconRight={<Icon.Ionicons        
          name={
            Platform.OS === 'ios' ? 'ios-person' : 'md-person'
          }           
          value={this.state.value} 
          size={30}  
          style={[  formStyles.alignRight,
            {marginTop:7, color:"#C7C7CC" },
            ((self)=>{
              //i can change the style of the component related to the attibute of example_input_field
              if(!!(self.refs && self.refs.first_name)){
                if(!self.refs.example_input_field.valid) return {color:'#d52222'}
              }
              }
            )(this)]}
            />}

          helpText={((self)=>{

            if(Object.keys(self.refs).length !== 0){
              if(!self.refs.registrationForm.refs.first_name.valid){
                return self.refs.registrationForm.refs.first_name.validationErrors.join("\n");
              }
            }
            // if(!!(self.refs && self.refs.first_name.valid)){
            // }
          })(this)}
          validationFunction={[(value)=>{
            /*
            you can have multiple validators in a single function or an array of functions
             */

            if(value == '') return "Required";
            //Initial state is null/undefined
            if(!value) return true;
            // Check if First Name Contains Numbers
            var matches = value.match(/\d+/g);
            if (matches != null) {
                return "First Name can't contain numbers";
            }

            return true;
          }, (value)=>{
            ///Initial state is null/undefined
            if(!value) return true;
            if(value.indexOf('4')!=-1){
              return "I can't stand number 4";
            }
            return true;
          }]}
          
          />
      <InputField 
        labelStyle={{color:'white'}}
       ref='example_input_field'
       style={{color: 'white'}}
           ref='email_adress' 
           keyboardType = 'email-address' 
           placeholder='Email Address'
           iconRight={
            <Icon.Ionicons        
            name={
              Platform.OS === 'ios' ? 'ios-mail' : 'md-mail'
            }           
            value={this.state.value} 
            size={30}  
            style={[  formStyles.alignRight,
              {marginTop:7, color:"#C7C7CC" },
              ((self)=>{
                //i can change the style of the component related to the attibute of example_input_field
                if(!!(self.refs && self.refs.example_input_field)){
                  if(!self.refs.example_input_field.valid) return {color:'#d52222'}
                }
                }
              )(this)]}
              />
        }
           />
      
      <InputField 
        labelStyle={{color:'white'}}
           ref='Password' 
           style={{color: 'white'}}
           placeholder='Password'
           iconRight={
            <Icon.Ionicons        
            name={
              Platform.OS === 'ios' ? 'ios-lock' : 'md-lock'
            }            
            size={30}  
            style={[
              formStyles.alignRight,{color: '#C7C7CC'},
              this.props.iconStyle]}/>
        }
        />
              <InputField 
           ref='Confirm Password' 
           style={{color: 'white'}}
           placeholder='Confirm Password'
           iconRight={
            <Icon.Ionicons        
            name={
              Platform.OS === 'ios' ? 'ios-lock' : 'md-lock'
            }            
            size={30}  
            style={[
              formStyles.alignRight,{color: '#C7C7CC'},
              this.props.iconStyle]}/>
        }
        />

{/*           
          <DatePickerField ref='birthday'
          minimumDate={new Date('1/1/1900')}
          maximumDate={new Date()}
          placeholder='Birthday'/> */}

   {/* <LinkField
label="LinkField, it acts like a button" onPress={()=>{}}
iconLeft={<Icon.Ionicons style={{marginLeft:10, alignSelf:'center', color:'#793315'}} name='ios-american-football-outline' size={30} />}
iconRight={<Icon.Ionicons style={{alignSelf:'center',marginRight:10, color:'#969696'}} name='ios-arrow-forward' size={30} />}
/> */}
 <SwitchField 
   labelStyle={{color:'white'}}
 containerStyle ={{ backgroundColor:'transparent'}}
 labelStyle={{color:'white'}}
 label='I accept Terms & Conditions'
ref="has_accepted_conditions"
helpText='Please read carefully the terms & conditions that are outlined at www.coupldup.com'
/>



  <Separator />
</Form>


      );

    }

  }
  