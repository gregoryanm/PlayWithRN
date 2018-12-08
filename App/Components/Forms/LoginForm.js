import React, {Component} from 'react';
import {
    AppRegistry,
    Button,
    View,
    Text,
    TextInput,
    Platform,
    Switch,
    TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';
import {Icon} from 'expo'
import styles from './Styles/LoginFormStyle'
// import { texttemplate } from './Templates' Declare Form
import t from 'tcomb-form-native'
var Form = t.form.Form;
var LoginForm = t.struct({email: t.String, password: t.String});

//Declare Form Style
var _ = require('lodash');
var stylesheet = _.cloneDeep(Form.stylesheet);
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

var options = {
    stylesheet: stylesheet,
    auto: 'placeholders',
    fields: {
        password: {
            password: true,
            secureTextEntry: true,
            template: texttemplate,
            config: {
                icon: 'lock',
                iconcolor: 'grey'
            }
        },
        email: {
            template: texttemplate,
            config: {
                icon: 'mail',
                iconcolor: 'grey'
            }
        }
    }
}

function texttemplate(locals) {

    var inputContainer = {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10
    }
    var textboxViewStyle = {
        flexDirection: 'row',
        paddingHorizontal: 0,
        paddingVertical: 0
    }
    var labelStyle = {
        paddingHorizontal: 5,
        marginRight: 5,
        color: locals.config.iconcolor
    }
    var textboxStyle = {
        borderColor: 'grey',
        borderBottomWidth: 1,
        padding: 0,
        flex: 1,
        fontSize: 17,
        color: '#555'
    }

    var iconSize = 20
    var underline = "rgba(0, 0, 0, 0)"

    // marginLeft: 2 , flex: 1, fontSize: 17
    return (
        <View style={inputContainer}>
            <View style={textboxViewStyle}>
                <Icon.Ionicons
                    name={IconHelper(locals.config.icon)}
                    style={labelStyle}
                    size={iconSize}/>
                <TextInput
                    placeholder={locals.placeholder}
                    style={textboxStyle}
                    underlineColorAndroid={underline}/>
            </View>
        </View>
    );

}

export default class FormView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: {}
        }
        this.onChange = this
            .onChange
            .bind(this);
    }

    handleSubmit = () => {
        const value = this
            ._form
            .getValue() // use that ref to get the form value
        console.log(value)
    }

    onChange(value) {
        this.setState({value})
    }

    render() {
        return (
            <View style={styles.container}>
                <Form ref={c => this._form = c} // assign a ref
                    type={LoginForm} value={this.state.value} onChange={this.onChange}/>

                <TouchableHighlight
                    style={styles.buttonSave}
                    onPress={this.handleSubmit}
                    underlayColor='#99d9f4'>
                    <Text style={styles.buttonLogin}>Save</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.buttonFacebook}
                    onPress={this.handleSubmit}
                    underlayColor='#99d9f4'>
                    <Text style={styles.buttonLogin}>Save</Text>
                </TouchableHighlight>
            </View>
        );
    }

}
