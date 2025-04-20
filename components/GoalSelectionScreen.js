import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';

const goals = [
  { id: 1, text: "Lose Weight", colors: ['#92A3FD', '#9DCEFF'], image: require("../assets/Vector3.png") },
  { id: 2, text: "Gain Muscle", colors: ['#92A3FD', '#9DCEFF'], image: require("../assets/Vector4.png") },
  { id: 3, text: "Improve your health", colors: ['#92A3FD', '#9DCEFF'], image: require("../assets/Vector5.png") },
];

export default function GoalSelectionScreen({ navigation, route }) {
  const { username } = route.params;

  return (
    
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
      <Text style={styles.title}>Choose a Goal!</Text>
      <View style={{ height: 60 }} />
      </View>
      {goals.map((goal) => (
        <LinearGradient
          key={goal.id}
          colors={['#92A3FD', '#9DCEFF']}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 1 }}
          style={styles.goalCard}>
          <View style={styles.circle}>
            <Image source={goal.image} style={styles.goalImage} />
          </View>
          <TouchableOpacity 
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Home', { username })}>
            <LinearGradient
              colors={goal.colors}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>{goal.text}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </LinearGradient>
      ))}
      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
      <Text style={styles.suptitle}> Click the buttom to go the next page!</Text>      
    </View>
  </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingTop: 50,
   
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  goalCard: {
    flexDirection: 'row-reverse',
    borderRadius: 20,
    padding: 10,
    height: 150,
    width: 330,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3,
    justifyContent: 'center',
    
  },
  buttonContainer: {
    flex: 1,
    width: '90%',
    height: '100%',
    paddingVertical: 10,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',

    
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 60,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FFFFFF',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  goalImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  suptitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
  },
});