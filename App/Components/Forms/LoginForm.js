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
import {options} from './Templates'
import t from 'tcomb-form-native'

import styles from './Styles/LoginFormStyle';

var Form = t.form.Form;
var LoginForm = t.struct({email: t.String, password: t.String});

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
                    type={LoginForm} value={this.state.value} onChange={this.onChange} options={options}/>

                <TouchableHighlight
                    style={styles.buttonLogin}
                    onPress={this.handleSubmit}
                    underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.buttonFacebook}
                    onPress={this.handleSubmit}
                    underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Login with Facebook</Text>
                </TouchableHighlight>
            </View>
        )
    }

}
