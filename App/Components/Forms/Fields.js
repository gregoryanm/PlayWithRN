import React, { Component } from 'react'
import {PickerField, LinkField} from 'react-native-form-generator';
import { Icon.Ionicons as Icon } from 'expo';

let {
  StyleSheet
} = React;

class WrappedPickerField extends React.Component{
    render(){
      return(
        <PickerField
        fieldRef = {this.props.fieldRef}
        value={this.props.value}
        placeholder={this.props.placeholder}
        options={this.props.options}
        onChange={this.props.onChange}
        onValueChange={this.props.onValueChange}
        iconRight={
          <Icon name='ios-arrow-right'
          size={30}
          style={
              [
            formStyles.alignRight,
            {color: '#C7C7CC'},
            this.props.iconStyle
        ]} />
      }/>
      )}
}

// class WrappedLinkField extends React.Component{
//   render(){
//     return( 
//     <LinkField
//       label={this.props.label}
//       onPress={this.props.onPress}
//       iconRight={
//       <Icon 
//       name='ios-arrow-right'
//       size={30}
//         />}
//       )}
// }


let formStyles = StyleSheet.create({
    alignRight:{
      marginTop: 7, position:'absolute', right: 10
    }
  });