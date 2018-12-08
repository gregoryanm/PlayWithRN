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
import {Icon} from 'expo'
import {IconHelper} from '../../Lib/Util'

function switchtemplate(locals) {

    var formGroupStyle = {
            marginVertical: 10
        },
        fromWidgetStyle = {
            paddingBottom: 10,
            flexDirection: 'row',
            paddingHorizontal: 0,
            paddingVertical: 0,
            justifyContent: 'space-between'
        },
        controlLabelStyle = {
            fontSize: 17,
            fontWeight: 'bold',
            textDecorationLine: 'underline',
            color:'white'
        },
        checkboxStyle = {
            // paddingHorizontal: 5,
            margin: 'auto'
        },
        helpBlockStyle = {
            fontSize: 13,
            marginLeft: 10,
            color: 'white'
        }

    return (
        <View style={formGroupStyle}>
            <View style={fromWidgetStyle}>
                <Text style={controlLabelStyle}>{locals.label}
                </Text>

                <Switch
                    style={checkboxStyle}
                    disabled={locals.disabled}
                    onTintColor={locals.onTintColor}
                    thumbTintColor={locals.thumbTintColor}
                    tintColor={locals.tintColor}
                    accessibilityLabel={locals.label}
                    onValueChange={value => locals.onChange(value)}
                    value={locals.value}/>

            </View>
            <Text style={helpBlockStyle}>{locals.help}
            </Text>
        </View>
    )
}

export function texttemplate(locals) {

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

export const options = {
    // legend: 'My form legend', order: ['name', 'surname', 'rememberMe', 'gender',
    // 'age', 'email'] //set the order
    i18n: {
        optional: ' (optional)',
        required: '',
        add: 'Add', // add button
        remove: '✘', // remove button
        up: '↑', // move up button
        down: '↓' // move down button
    },
    auto: 'placeholders',
    fields: {
        firstname: {
            template: texttemplate,
            config: {
                icon: 'contact',
                iconcolor: 'grey'
            }
        },
        lastname: {
            template: texttemplate,
            config: {
                icon: 'person',
                iconcolor: 'grey'
            }
        },
        age: {
            template: texttemplate,
            config: {
                icon: 'remove',
                iconcolor: 'grey'
            }
        },
        password: {
            // help: 'Please ensure your password contains 1 Capital letter and a special
            // character.',
            password: true,
            secureTextEntry: true,
            template: texttemplate,
            config: {
                icon: 'lock',
                iconcolor: 'grey'
            }
        },
        confirmpassword: {
            placeholder: 'Confirm Password',
            template: texttemplate,
            config: {
                icon: 'lock',
                iconcolor: 'grey'
            }
        },
        occupation: {
            template: texttemplate,
            config: {
                icon: 'filing',
                iconcolor: 'grey'
            }
        },
        email: {
            // you can use strings or JSX autoFocus: true,
            error: 'Invalid email address',
            template: texttemplate,
            config: {
                icon: 'mail',
                iconcolor: 'grey'
            }
        },
        income: {
            nullOption: {
                value: '',
                text: 'Annual Household Income'
            }
        },
        gender: {
            onCollapseChange: () => {
                console.warn('collapse changed');
            },
            nullOption: {
                value: '',
                text: 'Gender'
            }
        },
        hobbies: {
            label: 'Hobbies'
        },
        birthDate: {
            config: {
                defaultValueText: 'Date of Birth',
                format: (date) => moment(date).format("MMM DD,  YYYY")
            },
            mode: 'date' // display the Date field as a DatePickerAndroid
        },
        termsAndConditions: {
            label: 'Terms and Conditions',
            help: 'Please read carefully the terms and agreement found at www.coupldup.com',
            template: switchtemplate
        }
    }
}
