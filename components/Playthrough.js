import * as React from 'react';
import { FlatList, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import Entry from './Entry';

import { characters } from '../data/characters';

import * as StorageUtils from '../storage';

const Playthrough = async ({ route, navigation }) => {
  const playthroughs = await StorageUtils.getData('playthroughs').playthroughs; // [{ name: "My Golden Route", units: [{ name: 'Claude' }, { name: 'Byleth '}] }];
  const [activePlaythrough, setActivePlaythrough] = React.useState(playthroughs[0] || null);
  const [open, setOpen] = React.useState(false);
  const [items, setItems] = React.useState(playthroughs.map((playthrough) => { return { label: playthrough.name, value: playthrough }}));
  const entries = [`Claude`, `Byleth`] // The characters for activePlaythrough

  return (
    <View>
      { playthroughs.length > 0 ?
        <DropDownPicker
          open={open}
          value={activePlaythrough}
          items={items}
          setOpen={setOpen}
          setValue={setActivePlaythrough}
          setItems={setItems}
        /> : null }
      <FlatList
        data={ entries }
        renderItem={({item}) => <Entry character={characters[item]} unitInfo={activePlaythrough.units[item]} navigation={navigation}/>}
      />
    </View>
  );
}

export default Playthrough;