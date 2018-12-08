import React, { Component } from 'react'
import { Icon } from 'expo'

export default class WrappedIcon extends React.Component {
    render() {
      return (
        <Icon.Ionicons {...this.props} />
      );
    }
  }