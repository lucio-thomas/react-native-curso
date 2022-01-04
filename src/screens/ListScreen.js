import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () =>{
    
    const greeting = 'Hello There!'
    const friends = [
        {name: 'Chandler',key: 1, age: 20},
        {name: 'Joey',key: 2, age: 21},
        {name: 'Monica',key: 3, age: 22},
        {name: 'Phoebe',key: 4, age: 23},
        {name: 'Rachel',key: 5, age: 24},
        {name: 'Ross',key: 6, age: 25}
    ]

    return(
        <View>
            <Text style= {styles.greetingSty}>{greeting}</Text>
            <Text style= {styles.textSty}>This is the List Screen</Text>
            <Text></Text>
            <FlatList
                style= {styles.listText}
                data ={friends}
                renderItem = {({item}) =>{
                    return <Text>{item.name} - Age: {item.age}</Text>
                }}
            />
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
        
    },
    listText:{
        fontSize: 15
    }
})


export default ListScreen