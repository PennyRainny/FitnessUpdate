import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

function ImageWithText({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        {/* รูปพื้นหลัง */}
        <Image 
          source={require('../assets/bg_2_.png')} 
          style={styles.image} 
        />
        
        {/* รูปทับ */}
        <Image 
          source={require('../assets/runner_2_.png')} 
          style={styles.overlayImage} 
        />
      </View>

      <Text style={styles.caption}>Get Burn</Text>
      <Text style={styles.subText}>
        Let’s keep burning, to achieve your goals, it hurts only temporarily, 
        if you give up now you will be in pain forever
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
        onPress={() => navigation.navigate('EatWell')}
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
    height: 500,
  },
  image: {
    width: '100%', 
    height: '55%',
    resizeMode: 'cover',
  },
  overlayImage: {
    position: 'absolute',
    bottom: 50,
    left: '50%',
    transform: [{ translateX: -200 }], 
    width: 400,
    height: 350,
    resizeMode: 'contain',
  },
  caption: {
    marginTop: 30,
    fontSize: 40,
    color: '#000',
    textAlign: 'left',
    fontFamily: 'Poppins-Bold',
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  subText: {
    marginTop: 30,
    fontSize: 18,
    color: '#555',
    textAlign: 'left',
    paddingHorizontal: 20,
    lineHeight: 26,
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
    shadowOpacity: 0.25,
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
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default ImageWithText;