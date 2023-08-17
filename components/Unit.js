import * as React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';

const Unit = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <Text>{ props.name }</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: 'green' }}>
        <Text>Pairing</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'blue' }}>
        <View style={{ flex: 1, backgroundColor: 'yellow', width: "50%" }}>
          <Text>Class Path</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'purple', width: "50%" }}>
          <Text>Skills</Text>
        </View>
      </View>
    </View>
  );
}

export default Unit;