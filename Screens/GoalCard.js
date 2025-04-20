import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GoalCard = ({ item }) => (
  
  <LinearGradient
    colors={item.colors} 
    start={{ x: 3, y: 2 }}
    end={{ x: 4, y: 0 }}
    style={styles.Card}
  >

      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.line} />
      <Text style={styles.description}>{item.description}</Text>
  
  </LinearGradient>
);

const styles = StyleSheet.create({
  Card: {
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 20,
    width: 370,
  },
  image: {
    width: 206,
    height: 290,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 10,
  },
  line: {
    width: 60,
    height: 2,
    backgroundColor: '#FFFFFF',
    marginBottom: 20, // เพิ่มช่องว่างหลังเส้น
  },
  description: {
    fontSize: 13,
    textAlign: 'center',
    color: '#ffffff',
    paddingHorizontal: 50,
    lineHeight: 22,
  },
});

export default GoalCard;
