import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import AppText from '../Component/AppText';
import Card from '../Component/Card';
import {DepartmentCards} from '../data/DepartmentCard';

export default function HomeScreen() {
  return (
    <View style={{flex: 1}}>
      <View>
        <FlatList
          numColumns={2}
          data={DepartmentCards}
          renderItem={({item}) => {
            return <Card title={item.title} image={item.image} />;
          }}
          keyExtractor={item => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Home: {
    flex: 1,
    backgroundColor: '#f8f4',
    padding: 100,
  },
});
