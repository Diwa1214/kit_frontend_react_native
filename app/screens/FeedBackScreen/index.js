import React from 'react';
import {View, StyleSheet, Image, FlatList} from 'react-native';
import FeedCard from '../Component/FeedCard';
import {DataFeedBack} from '../data/FeedBack';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
export default function FeedBack() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DataFeedBack}
        keyExtractor={item => {
          return item.id;
        }}
        renderItem={({item}) => {
          return (
            <FeedCard
              user={item.user}
              feedBack={item.feedBack}
              date={item.date}
              profile={item.profile}
              onPress={() => {
                console.log('Hai');
              }}
              righAction={() => {
                return <View style={{width: 70, backgroundColor: 'red',justifyContent:"center",alignItems:"center"}} >
                 <MaterialCommunityIcons name="delete" color="white" size={30} onPress={()=>{
                    //   DataFeedBack.filter((items)=>{
                    //     return item.id !==items.id
                    //  })
                    console.log("dlete");
                 }} />
                </View>;
              }}
            />
          );
        }}
        ItemSeparatorComponent={Separtor}
        refreshing={false}
      />
    </View>
  );
}

const Separtor = () => {
  return (
    <View style={{width: '100%', height: 0.5, backgroundColor: '#808080'}} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    marginTop: 7,
  },
  FeedBack: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  messageContainer: {
    display: 'flex',
    flexDirection: 'row',
  },

  message: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 12,
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  userText: {
    fontSize: 14,
    fontWeight: '700',
  },
  userMessage: {
    fontSize: 14,
    fontWeight: '500',
    color: '#A8A8A8',
  },
});
