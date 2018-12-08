import React, {Component} from 'react'
import {Platform} from 'react-native'

//Declare Translations
export function IconHelper(icon){
    return Platform.OS === "ios" ? "ios-" + icon : "md-" + icon
  }