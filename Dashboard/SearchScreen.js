import React, { useState } from 'react';
import {View,Text,StyleSheet,TextInput,FlatList,TouchableOpacity,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const DATA = [
  { id: '1', title: 'WorkoutTracker', subtitle: 'Go to WorkoutTracker', color: '#D0E4FF', screen: 'WorkoutTracker' },
  { id: '2', title: 'Food', subtitle: 'Go to Food', color: '#F3D3FF', screen: 'FoodScreen' },
  { id: '3', title: 'Burpees', subtitle: 'Go to Burpees', color: '#F3D3FF', screen: 'BurpeesScreen' },
  { id: '4', title: 'Bench Jump', subtitle: 'Go to Bench Jump', color: '#D0E4FF', screen: 'BenchJumpScreen' },
];

export default function SearchScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = DATA.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(item.screen)}
    >
      <View style={[styles.iconCircle, { backgroundColor: item.color }]}>
        <Ionicons name="ellipse" size={10} color="white" />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#aaa" />
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['#A9C9FF', '#84fab0']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#aaa" />
          <TextInput
            placeholder="Search"
            style={styles.input}
            placeholderTextColor="#aaa"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </View>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.indicator} />
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: 10 }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={{ textAlign: 'center', color: '#999', marginTop: 20 }}>
              ไม่พบข้อมูลที่ค้นหา
            </Text>
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
    color: '#333',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
  },
  indicator: {
    width: 50,
    height: 4,
    backgroundColor: '#ddd',
    borderRadius: 5,
    alignSelf: 'center',
    marginVertical: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  iconCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: 15,
  },
  subtitle: {
    fontSize: 12,
    color: '#888',
  },
});
