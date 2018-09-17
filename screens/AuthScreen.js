import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as actions from 'actions';

class AuthScreen extends Component {
    state = {};
    static propTypes = {};
    static defaultProps = {};

    componentDidMount() {
        this.props.checkFbLogin();
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>This is my AUTH</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
    text: {
        color: '#000'
    },
});

export default connect(null, actions)(AuthScreen);
