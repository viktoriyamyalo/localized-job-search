import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Slides from "../components/Slides";

const SLIDES_DATA = [
    { text: 'Welcome to Job Search' },
    { text: 'This is an app that helps you find a job' },
    { text: 'Set your location, then swipe away' }
];

export default class WelcomeScreen extends Component {
    state = {};
    static propTypes = {};
    static defaultProps = {};

    onFinishTutorial = () => {
        const { navigation } = this.props;
        navigation.navigate('auth');
    };

    render() {
        return (
            <Slides data={SLIDES_DATA} onFinish={this.onFinishTutorial}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
    text: {},
});
