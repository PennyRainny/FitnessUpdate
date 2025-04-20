import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

function ImageWithText({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>  
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/Group.png')} 
          style={styles.image} 
        />
      </View>

      <Text style={styles.caption}>Eat Well</Text>
      <Text style={styles.subText}>
        Let's start a healthy lifestyle with us, we can determine your diet every day. Healthy eating is fun!
      </Text>

      {/* ปุ่มย้อนกลับ */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" size={24} color="#fff" />
      </TouchableOpacity>

      {/* ปุ่มเลื่อนไปหน้าถัดไป */}
      <TouchableOpacity 
        style={styles.nextButton} 
        onPress={() => navigation.navigate('GoalsScreen')}
      >
        <AntDesign name="arrowright" size={24} color="#fff" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 480,
  },
  image: {
    width: '100%', 
    height: '100%', 
    resizeMode: 'cover',
  },
  caption: {
    marginTop: 20,
    fontSize: 36,
    color: '#333',
    textAlign: 'left',
    fontFamily: 'Poppins-Bold',
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  subText: {
    marginTop: 20,
    fontSize: 18,
    color: '#666',
    textAlign: 'left',
    paddingHorizontal: 20,
    lineHeight: 28,
  },
  nextButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#92A3FD',
    padding: 15,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  backButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: '#92A3FD',
    padding: 15,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default ImageWithText;