import React, { Component } from 'react';
import {AppRegistry, Button, View, Text,  TextInput, Platform, Switch, TouchableHighlight  } from 'react-native';
import {IconHelper } from '../../Lib/Util'
import { Icon } from 'expo'

export function texttemplate(locals) {

    var inputContainer = {   
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
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
        <View style={inputContainer}>
            <View style={textboxViewStyle}>
                <Icon.Ionicons name={IconHelper(locals.config.icon)} style={labelStyle} size={iconSize} />
                <TextInput placeholder={locals.placeholder} style={textboxStyle} underlineColorAndroid={underline}/>
            </View>
        </View>
    );
  
  }
  