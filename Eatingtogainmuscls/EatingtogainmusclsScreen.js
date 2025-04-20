import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EatingtogainmusclsScreen({ navigation, route }) {
  const [favorites, setFavorites] = useState([]);

  const foodMenu = [
    { id: '1', name: 'ข้าวกะเพราหมู และ ไข่ต้ม', kcal: '530 Kcal', screen: 'PorkbasilriceandboiledeggsScreen' },
    { id: '2', name: 'โอนิกิริแซลมอนย่างเกลือ', kcal: '250 Kcal', screen: 'GrilledSalmonOnigiriwithSaltScreen' },
    { id: '3', name: 'แซนวิชไส้ทูน่าสลัด', kcal: '250 Kcal' , screen: 'TunaSaladSandwichScreen'},
    { id: '4', name: 'ผักสลัด และ อกไก่ฉีก', kcal: '125 Kcal' , screen: 'SaladandshreddedchickenbreastScreen'},
    { id: '5', name: 'กราโนล่า', kcal: '29 Kcal', screen: 'GranolaScreen' },
  ];

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const toggleItem = route.params?.toggleFavorite;
      if (toggleItem) {
        setFavorites((prev) => {
          const exists = prev.some((fav) => fav.id === toggleItem.id);
          if (exists) {
            return prev.filter((fav) => fav.id !== toggleItem.id);
          } else {
            return [...prev, toggleItem];
          }
        });
        navigation.setParams({ toggleFavorite: null });
      }
    });
    return unsubscribe;
  }, [navigation, route.params?.toggleFavorite]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        item.screen &&
        navigation.navigate(item.screen, {favorites, onToggleFavorite: (toggledItem) => { setFavorites((prev) => {
              const exists = prev.some((f) => f.id === toggledItem.id);
              return exists
                ? prev.filter((f) => f.id !== toggledItem.id)
                : [...prev, toggledItem];
            });
          },
        })
      }
    >
      <View>
        <Text style={styles.foodName}>{item.name}</Text>
        <Text style={styles.kcal}>{item.kcal}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color="#999" />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Eating for weight loss</Text>
      </View>

      <Text style={styles.sectionTitle}>Favorite</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={{ color: '#888' }}>No favorites yet.</Text>}
      />

      <Text style={[styles.sectionTitle, { marginTop: 20 }]}>List menu food</Text>
      <FlatList
        data={foodMenu}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    right: '28%',
    marginTop: -3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  card: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  foodName: {
    fontSize: 15,
    fontWeight: '600',
  },
  iconButton: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 10,
    elevation: 4,
  },
  kcal: {
    fontSize: 13,
    color: '#888',
    marginTop: 3,
  },
  emptyText: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    paddingVertical: 10,
  },
});
