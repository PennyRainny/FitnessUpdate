import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function PlankToShoulderScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Exercises</Text>
      <LinearGradient colors={['#92B4FD', '#D9E6FF']} 
          start={{ x: 3, y:1 }}
          end={{ x: 2, y: 3 }}
      style={styles.card}>
        <Image 
        source={require('../assets/PlanktoShoulder.png')} style={styles.exerciseImage} 
        />
        <Text style={styles.title}>Plank to Shoulder Tap</Text>
        <Text style={styles.line}></Text>
        <Text style={styles.subTitle}>วิธีทำ:</Text>
        <Text style={styles.description}>
        •	ตั้งท่าแพลงก์แขนตรง → ใช้มือขวาแตะไหล่ซ้าย	{'\n'}
        •	สลับใช้มือซ้ายแตะไหล่ขวา โดยไม่ให้สะโพกขยับมาก {'\n'}
        ทำ 15-20 ครั้ง × 3 เซต {'\n'}
        </Text>
      </LinearGradient>
      <TouchableOpacity  onPress={() => navigation.navigate('CountdownScreen4')}>
            <View style={{ height: 60 }} />
            <LinearGradient colors={['#C58BF2', '#B4C0FE']} 
                start={{ x: 3, y:1 }}
                end={{ x: 2, y: 3 }}
                style={styles.button}>
              <Text style={styles.buttonText}>Start</Text>
            </LinearGradient>
            </TouchableOpacity>
          </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  exerciseImage: {
    width: '100%',
    height: '60%',
    resizeMode: 'contain',
    marginBottom: 10,
  },
  card: {
    width: 300,
    height: 500,
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5, // เงาบน Android
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 2,
    textAlign: 'center',
  },
  line: {
    width: 60,
    height: 2,
    backgroundColor: '#FFFFFF',
    marginBottom: 6, // เพิ่มช่องว่างหลังเส้น
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  description: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    height: 60,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    
  },
});