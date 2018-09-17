import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class MapScreen extends Component {
    state = {};
    static propTypes = {};
    static defaultProps = {};
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>This is my MAP</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
    text: {},
});
