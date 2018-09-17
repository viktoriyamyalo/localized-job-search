import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SLIDE_COLORS = [
    '#0984e3',
    '#ff7675',
    '#74b9ff'
];

export default class Slides extends Component {
    state = {};
    static propTypes = {};
    static defaultProps = {};

    renderButton = (index) => {
        const { data, onFinish } = this.props;
        if (index === (data.length - 1)) {
            return (
              <Button
                  title={"Start browsing jobs"}
                  buttonStyle={styles.button}
                  titleStyle={styles.buttonTitle}
                  onPress={onFinish}
                  borderRadius={25}
                  containerViewStyle={{borderRadius:25}}
              />
            );
        }
    }

    renderSlides = () => {
        const { data } = this.props;
        return data.map((slide, index) => {
            return (
                <View key={slide.text} style={[styles.slide, { backgroundColor: SLIDE_COLORS[index]}]}>
                    <Text style={styles.text}>{slide.text}</Text>
                    {this.renderButton(index)}
                </View>
            );
        })
    }
    render() {
        return (
            <ScrollView
                horizontal
                style={styles.container}
                pagingEnabled
            >
                {this.renderSlides()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 30,
        fontWeight: '900',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 15
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH,
    },
    button: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 25
    },
    buttonTitle: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 22
    }
});
