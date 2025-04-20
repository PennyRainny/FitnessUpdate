import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { goals } from '../Screens/goals';
import GoalCard from '../Screens/GoalCard';



export default function GoalsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>What is your goal?</Text>
      <View style={{ height: 30 }} />

      <FlatList
        data={goals}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <GoalCard item={item} />}
        keyExtractor={(item) => item.key}
      />
      <View style={{ height: 40 }} />

      {/* ปุ่มกด Confirm พร้อม LinearGradient */}
      <LinearGradient
        colors={['#92B4FD', '#427DFF']} // สีไล่ระดับ
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.buttonGradient}
      >
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f6fa',
    paddingVertical: 70,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonGradient: {
    borderRadius: 30, // ขอบมนของ LinearGradient
    width: 315,
    elevation: 3, // เงาให้ปุ่มดูเด่น
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

