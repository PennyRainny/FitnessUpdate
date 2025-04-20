import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MincedChickenSoupScreen({ navigation, route }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const item = {
    id: '5',
    name: 'แกงจืดไก่สับ',
    kcal: '315 Kcal',
    screen: 'MincedChickenSoupScreen',
  };

  useEffect(() => {
    if (route.params?.favorites) {
      const exists = route.params.favorites.some(fav => fav.id === item.id);
      setIsFavorite(exists);
    }
  }, [route.params?.favorites]);
  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (route.params?.onToggleFavorite) {
      route.params.onToggleFavorite(item);
    }
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Image source={require('../assets/MincedChickenSoup.png')} style={styles.image} />
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="#333" />
      </TouchableOpacity>

      <View style={styles.contentBox}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.foodName}>{item.name}</Text>
            <Text style={styles.author}>by <Text style={{ color: '#84a9ff' }}>FitnessX</Text></Text>
          </View>
          <TouchableOpacity onPress={handleToggleFavorite}>
            <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={22} color="red" />
          </TouchableOpacity>
        </View>
        <Text style={styles.nutrition}>Nutrition</Text>
        <View style={styles.nutritionRow}>
      <View style={styles.nutriBox}>
      <Text style={styles.nutriText}>🔥 180 Kcal</Text>
      </View>
        <View style={styles.nutriBox}>
        <Text style={styles.nutriText}>🍳 1 g fats</Text>
        </View>
        <View style={styles.nutriBox}>
        <Text style={styles.nutriText}>🍗 0 g proteins</Text>
        </View>
        <View style={styles.nutriBox}>
       <Text style={styles.nutriText}>🍞 20 g carbo</Text>
      </View>
    </View>
    <Text style={styles.Descriptions}>Descriptions</Text>
    <Text style={styles.descriptionText1}> 
    เวลาในการรับประทาน: {'\n'}
    เหมาะสำหรับมื้อเย็น    {'\n'}
    เนื่องจากย่อยง่ายและมีแคลอรีต่ำ   {'\n'}
    </Text>
        <TouchableOpacity style={styles.favoriteBtn} onPress={handleToggleFavorite}>
          <Text style={styles.favoriteText}>
            {isFavorite ? 'Remove from Favorite' : 'Add to Favorite'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#E5E5E5' 
},
  image: { 
    width: '100%', 
    height: 240, 
    resizeMode: 'cover' 
},
  backButton: {
    position: 'absolute', 
    top: 50, 
    left: 20,
    backgroundColor: '#fff', 
    padding: 8, 
    borderRadius: 10, 
    elevation: 4,
  },
  contentBox: {
    backgroundColor: '#fff', 
    flex: 1, 
    marginTop: -40,
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30, 
    padding: 20,
  },
  headerRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
},
  foodName: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 4 
},
  author: { 
    fontSize: 12, 
    color: '#999',
    marginBottom: 20,
},
  sectionTitle: { 
    marginTop: 20, 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginBottom: 10 
},
  nutritionRow: { 
    flexDirection: 'row',
    flexWrap: 'wrap', 
    gap: 10 },
  nutriBox: {
    backgroundColor: '#F5F7FF', 
    borderRadius: 20,
    paddingHorizontal: 12, 
    paddingVertical: 6, 
    marginRight: 8, 
    marginBottom: 8,
  },
  nutriText: { 
    fontSize: 13, 
    color: '#333' 
},
  descriptionText: { 
    fontSize: 13, 
    color: '#555', 
    lineHeight: 20, 
    marginTop: 5 
},
  favoriteBtn: {
    marginTop: '67%', 
    backgroundColor: '#A9C9FF',
    paddingVertical: 14, 
    borderRadius: 30, 
    alignItems: 'center',
  },
  favoriteText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 15 
  },
  nutrition: { 
    fontWeight: 'bold', 
    fontSize: 16 ,
    marginBottom: 30,
  },
    nutritionRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 10, 
      marginBottom: 30,
    },
    
    nutriBox: {
      backgroundColor: '#F5F7FF',
      borderRadius: 20,
      paddingHorizontal: 14,
      paddingVertical: 9,
      marginRight: 2,
      marginBottom: 4,
      elevation: 3, 
    },
    
    nutriText: {
      fontSize: 13,
      color: '#333',
    },
    Descriptions: { 
      fontWeight: 'bold', 
      fontSize: 16 ,
      marginBottom: 7,
    },
    descriptionText1: { 
      fontSize: 13, 
      color: '#7B6F72', 
      fontWeight: '600', 
    },
    
});