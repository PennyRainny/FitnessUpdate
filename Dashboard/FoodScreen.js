import React from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DATA = [
  {
    id: '1',
    title: 'Eating for weight loss Weight',
    screen: 'Eatingforweightloss',
  },
  {
    id: '2',
    title: 'Eating to gain muscle',
    screen: 'Eatingtogainmuscls',
  },
  {
    id: '3',
    title: 'Eating for cardio',
    screen: 'Eatingforcardio',
  },
];

export default function FoodScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card} onPress={() => navigation.navigate(item.screen)}
    >
      <Text style={styles.cardText}>{item.title}</Text>
      <Ionicons
        name="chevron-forward-circle-outline"size={20}color="#C084FC"/>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
  
    <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
    <Ionicons name="chevron-back" size={20} color="#333" />
    </TouchableOpacity>

  
    <View style={{ alignItems: 'center' }}>
    <Text style={styles.title}>Food</Text>
    </View>

  
    <View style={{ width: 36 }} /> 
    </View>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  
  iconButton: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 10,
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center', 
    marginTop: -27,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 50,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,

  },
  cardText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
});
