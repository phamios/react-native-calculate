/**
 * Created by redsu on 6/13/2017.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';

import Style from './Style.js';

var InputButton = React.createClass({
    render() {
        return (
            <TouchableHighlight style={Style.inputButton}
                                underlayColor="#193441"
                                onPress={this.props.onPress}>
                <Text style={Style.inputButtonText}>{this.props.value}</Text>
            </TouchableHighlight>
        )
    }

});


module.exports = InputButton;