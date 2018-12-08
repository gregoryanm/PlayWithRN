import React, { Component } from 'react'
import PropTypes from 'prop-types';
import moment from 'moment'
import {AppRegistry, Button, View, Text,  TextInput, Platform, Switch, TouchableHighlight  } from 'react-native'
import styles from './Styles/SettingsStyle'
import { Icon } from 'expo'

// function template(locals) {
//   // in locals.inputs you find all the rendered fields
//   return (
//       <View>
//           {locals.inputs.company_id}
//           {locals.inputs.name}
//           {locals.inputs.email}
//           {locals.inputs.street}
//           {locals.inputs.zip}
//           {locals.inputs.city}
//           {locals.inputs.country}
//           {locals.inputs.tel}

//           {locals.inputs.position}

//           <View style={{marginTop: 10}}>
//               <Text style={[{marginLeft: 20}, constants.styles.strong]}>Betriebsleiter</Text>
//               {locals.inputs.manager}
//           </View>

//           <View style={{marginTop: 10}}>
//               {locals.inputs.notes}
//           </View>


//       </View>
//   );
// }


//Declare Form
var t = require('tcomb-form-native');
var Form = t.form.Form;

//Declare Form Style
const _ = require('lodash');
const stylesheet = _.cloneDeep(Form.stylesheet);

stylesheet.textbox.normal.borderWidth = 1;
stylesheet.textbox.error.borderWidth = 1;
stylesheet.textbox.normal.marginBottom = 0;
stylesheet.textbox.error.marginBottom = 0;

stylesheet.textboxView.normal.borderWidth = 0;
stylesheet.textboxView.error.borderWidth = 0;
stylesheet.textboxView.normal.borderRadius = 0;
stylesheet.textboxView.error.borderRadius = 0;
stylesheet.textboxView.normal.borderBottomWidth = 0;
stylesheet.textboxView.error.borderBottomWidth = 0;
stylesheet.textbox.normal.paddingBottom = 0;
stylesheet.textbox.error.paddingBottom = 0;

stylesheet.helpBlock.normal.fontSize = 13;
stylesheet.helpBlock.normal.paddingLeft = 10;

//Declare Form Options
var Gender = t.enums({
  M: 'Male',
  F: 'Female'
});

var IncomeRange = t.enums({
  0: '0 - $15,000',
  1: '$15,000 - $30,000',
  2: '$15,000 - $30,000',
  3: '$30,000 - $50,000',
  5: '$50,000 - $80,000',
  6: '$80,000 - $150,000',
  7: '$150,000 +',
  8: 'Prefer not to say',
});

//Declare Form Types
// a type representing positive numbers
var Positive = t.refinement(t.Number, function (n) {
  return n >= 0;
});

//Declare Form Validations

var PasswordMinLength = t.refinement(t.String, value => {
  return value.length > 6
})
var ConfirmPasswordEquality = t.refinement(t.String, value => {
  return value === this.state.value.password
})

//Declare Translations
IconHelper = (icon) => {
  return Platform.OS === "ios" ? "ios-" + icon : "md-" + icon
}

//Declare Form Model
var Person = t.struct({
  firstname: t.String,
  lastname: t.String,
  location: t.Number,
  zip: t.String,
  age: Positive, // refinement
  password: t.String,  
  confirmpassword: t.String,
  occupation: t.String,
  email: t.String,
  income: IncomeRange,
  // email: t.maybe(t.String),
  gender: Gender,
  rememberMe: t.Boolean,
  hobbies: t.list(t.String),
  birthDate: t.Date
});




var Login = t.struct({
  email: t.String,  
  password: t.String  
});

var Reset = t.struct({
  email: t.String
});

var Signup = t.struct({
  firstname: t.String,
  lastname: t.String,
  email: t.String,  
  password: t.String,  
  confirmpassword: t.String,  
  confirm_password: ConfirmPasswordEquality,
  termsAndConditions: t.Boolean,
});


var options = {  
  // legend: 'My form legend',
  // order: ['name', 'surname', 'rememberMe', 'gender', 'age', 'email'] //set the order
  i18n: {
    optional: ' (optional)',
    required: '',
    add: 'Add',   // add button
    remove: '✘',  // remove button
    up: '↑',      // move up button
    down: '↓'     // move down button
  },
  stylesheet: stylesheet,
  auto: 'placeholders',
  fields: {
    firstname: {
      template: texttemplate,
      config: { icon: 'contact', iconcolor: 'grey' }
    }, 
    lastname: {    
      template: texttemplate,
      config: { icon: 'person', iconcolor: 'grey' }
    },
    age: {
      template: texttemplate,
      config: { icon: 'remove', iconcolor: 'grey' }
    },
    password: {
    // help: 'Please ensure your password contains 1 Capital letter and a special character.',
      password: true,
      secureTextEntry: true,
      template: texttemplate,
      config: { icon: 'lock', iconcolor: 'grey' }
    },
    confirmpassword:{
      placeholder: 'Confirm Password',
      template: texttemplate,
      config: { icon: 'lock', iconcolor: 'grey' }
    },
    occupation:{      
      template: texttemplate,
      config: { icon: 'filing', iconcolor: 'grey' }
    },
    email: {
    // you can use strings or JSX
    // autoFocus: true,
      error: 'Invalid email address',    
      template: texttemplate,
      config: { icon: 'mail', iconcolor: 'grey' }
    },
    income:{
      nullOption: {value: '', text: 'Annual Household Income'},
    },
    gender: {
      onCollapseChange: () => { console.warn('collapse changed'); },
      nullOption: {value: '', text: 'Gender'}
    },
    hobbies:{
      label: 'Hobbies'
    },
    birthDate: {
      config: {defaultValueText: 'Date of Birth', format: (date) => moment(date).format("MMM DD,  YYYY") },
      mode: 'date' // display the Date field as a DatePickerAndroid
    },
    termsAndConditions: {
      label: 'Terms and Conditions',
      help: 'Please read carefully the terms and agreement found at www.coupldup.com',
      template: switchtemplate
    }
  }
};

//template generation

function creditCardTemplate (locals) {

  var expirationContainer = {
    flexDirection: 'row',
  }, 
  card_expire_month = {
    flex: 1,
    paddingRight: 5
  },
   card_cvv2 = {
    flex: 1
  }

  return (
    <View>
      {locals.inputs.card_number}
      {/* // Here you have this three fields in one line */}
      <View style={expirationContainer}>
        <View style={card_expire_month}>
          {locals.inputs.card_expire_year}
        </View>
        <View style={card_expire_month}>
          {locals.inputs.card_expire_month}
        </View>
        <View style={card_cvv2}>
          {locals.inputs.card_cvv2}
        </View>
      </View>
    </View>
  )
}


function switchtemplate(locals) {

var
  formGroupStyle = {
marginVertical: 10
},
fromWidgetStyle = {
  paddingBottom: 10,
  flexDirection: 'row',
  paddingHorizontal: 0,
  paddingVertical: 0,
  justifyContent: 'space-between',
},
controlLabelStyle ={
  fontSize: 17,
  fontWeight: 'bold',
  textDecorationLine: 'underline'
  },  
checkboxStyle={
  // paddingHorizontal: 5,
  margin: 'auto',
},
helpBlockStyle={
  fontSize: 13,
  marginLeft: 10,
  color: 'grey',
}

return (
<View style={formGroupStyle}>
<View style={fromWidgetStyle}>
<Text style={controlLabelStyle}>{locals.label} </Text>

  <Switch 
    style={checkboxStyle}
    disabled={locals.disabled}
    onTintColor={locals.onTintColor}
    thumbTintColor={locals.thumbTintColor}
    tintColor={locals.tintColor}
    accessibilityLabel={locals.label}
    onValueChange={value => locals.onChange(value)}
    value={locals.value}
  />

</View>
<Text style={helpBlockStyle}>{locals.help} </Text>
</View>
)
}

  function texttemplate(locals) {

  var inputContainer = {   
  flexDirection: 'row',
  alignItems: 'center',
  borderBottomWidth: 1,
  borderColor: '#CCC',
  // paddingBottom: 8
  }
  var textboxViewStyle = {    
    paddingBottom: 10,
    flexDirection: 'row',
    paddingHorizontal: 0,
    paddingVertical: 0
    // paddingVertical: Platform.OS === "ios" ? 7 : 0,
    // justifyContent: 'center',
  }
  var labelStyle = {  
    paddingHorizontal: 5,
    marginRight: 5,
    color: locals.config.iconcolor
  }
  var textboxStyle = {   
    borderColor:'grey',
    borderBottomWidth: 1,
    padding: 0,
    flex: 1,
    fontSize: 17,
    color: '#555', 
  }
  
  var iconSize = 20
  var underline = "rgba(0, 0, 0, 0)"
  
  // marginLeft: 2 , flex: 1, fontSize: 17
  return (
      <View style={textboxViewStyle}>
          <Icon.Ionicons name={IconHelper(locals.config.icon)} style={labelStyle} size={iconSize} />
          <TextInput placeholder={locals.placeholder} style={textboxStyle} underlineColorAndroid={underline}/>
      </View>
  );

}

export default class FormManager extends Component {
  constructor(props) {
    super(props);
    this.state={
      value: { }
    }
  }
  // // Prop type warnings
  static propTypes = {
    formType: PropTypes.object,
    formName: PropTypes.string
    // someSetting: PropTypes.bool.isRequired,
  }
  //
  // // Defaults for props
  static defaultProps = {
    formType: {Person},
    formName: "Profile"
  }


  getType(value) {
    if (value.country === 'IT') {
      return t.struct({
        country: Country,
        rememberMe: t.Boolean
      });
    } else if (value.country === 'US') {
      return t.struct({
        country: Country,
        name: t.String
      });
    } else {
      return t.struct({
        country: Country
      });
    }
  }


  getValue = () => { return this.refs.form.getValue()}
  isEmail = (x) => {
    return /(.)+@(.)+/.test(x);
  }
  onChange = (value)=> { this.setState({value}) }

  resetForm = () => {
    this.setState({value: null});
  }

  save = () => {
    var value = this.refs.form.getValue();
    if (value) {
      console.log(value);
    }
  }

  onSubmit(evt) {
    const value = this.refs.form.getValue();
    if (!value) {
      // there are errors, don't send the form
      evt.preventDefault();
    } else {
      // everything ok, let the form fly...
      // ...or handle the values contained in the
      // `value` variable with js
    }
  }

  onPress = () => { 
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
    }
  }
  


  render() {
    return (
      <View style={styles.container}>
      {/* display */}
      <Form ref="form" type={Signup} options={options} value={this.state.value} onChange={this.onChange}/>
      <TouchableHighlight style={styles.buttonSave} onPress={this.onPress} underlayColor='#99d9f4'>

        <Text style={styles.buttonText}>Save</Text>
      </TouchableHighlight>
    </View>
    )
  }
}

