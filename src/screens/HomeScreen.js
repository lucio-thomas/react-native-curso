import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {

  const greeting = 'Hi there!'
  return( 
    <View>
      <Text style={styles.greetingText}>{greeting}</Text>
      <Text style={styles.text}>This is the homescreen.</Text>
      <Button 
        onPress={() => navigation.navigate('Components')}
        title='Click me! Go to Components demo'
      />
      <Button 
        onPress={() => navigation.navigate('List')}
        title='Click me! Go to List demo'
      />
      {/* 
        <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
          <Text>Go to List demo</Text>
          <Text>Yes, List demo...</Text>
          <Text>Just try it!</Text>
        </TouchableOpacity>
      */}
    </View>
  )
};

const styles = StyleSheet.create({
  greetingText: {
    fontSize: 30,
  },
  text: {
    fontSize: 20,
  },
});

export default HomeScreen;
