import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Button } from 'react-native-elements';

export default class ReviewScreen extends Component {
    state = {};
    static propTypes = {};
    static defaultProps = {};
    static navigationOptions = ({navigation}) => ({
        title: 'Review liked jobs',
        headerRight: (
            <Button
                title="Settings"
                onPress={() => navigation.navigate('settings')}
                backgroundColor={'rgba(0, 0, 0, 0)'}
                color={'rgba(0, 122, 255, 1)'}
            />
        ),
        headerStyle: styles.header
    });
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>This is REVIEW</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
    text: {},
    header: {
        marginTop: Platform.OS === 'android' ? 24 : 0,
    }
});
