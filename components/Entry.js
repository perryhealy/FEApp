import * as React from 'react';
import { View, Text, Image, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Entry = (props) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Image
        source={{
          uri: props.character.portrait,
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text>
        Hello, I am {props.character.name}!
      </Text>
      <Button
        title="Go to Claude's profile"
        onPress={() =>
          props.navigation.navigate('Unit', {
            characterId: props.character.name
          })
        }
      />
    </View>
  );
}

export default Entry;