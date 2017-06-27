/**
 * Created by redsu on 6/13/2017.
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import Style from './src/Style.js';
import InputButton from './src/InputButton.js';


const inputButtons = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+']
];

var Calculate = React.createClass({
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 0
        }
    },

    _renderInputButtons() {
        let views = [];
        for (var r = 0; r < inputButtons.length; r ++) {
            let row = inputButtons[r];
            let inputRow = [];
            for (var i = 0; i < row.length; i ++) {
                let input = row[i];
                inputRow.push(
                    <InputButton
                        value={input}
                        onPress={this._onInputButtonPressed.bind(this, input)}
                        key={r + "-" + i}/>
                );
            }
            views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
        }
        return views;
    },
    _onInputButtonPressed(input) {
        alert(input)
    },

    render() {
        return (
            <View style={Style.rootContainer}>
                <View style={Style.displayContainer}></View>
                <View style={Style.inputContainer}>
                    {this._renderInputButtons()}
                </View>
            </View>
        );
    }



});


module.exports = Calculate;