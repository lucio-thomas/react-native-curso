import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreens = () => {
    
    const greeting = 'Hello There!'

    return(
        <View>
            <Text style= {styles.greetingSty}>{greeting}</Text>
            <Text style= {styles.textSty}>This is the Components Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    greetingSty: {
        fontSize: 40,
        color: 'green'
    },
    textSty: {
        fontSize: 20,
        color: 'blue'
    }
})

export default ComponentsScreens