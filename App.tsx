import React from 'react';
import {Text, View} from 'react-native';

const helloWorld = () => {
  return (
    <View style={{
      flex:1,
      justifyContent: 'center',
      alignItems:'center',
      
    }}>
      <Text> hello world </Text>
    </View>
  );
};

export default helloWorld;
