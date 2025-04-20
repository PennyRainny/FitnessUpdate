import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const loseWeightExercises = {
  category: 'Lose Weight',
  items: [
    { name: 'Burpees', reps: '10-15 (3 set)', screen: 'BurpeesScreen' },
    { name: 'Jump Squats', reps: '15-20 (3 set)' },
    { name: 'Mountain Climbers', reps: '30-60 sec (3 set)' },
    { name: 'High Knees', reps: '30-60 sec (3 set)' },
    { name: 'Plank to Shoulder', reps: '15-20 (3 set)' },
  ],
};

const gainMuscleExercises = {
  category: 'Gain Muscle',
  items: [
    { name: 'Bench Jump', reps: '15-20 (3 set)', screen: 'BenchJumpScreen' },
    { name: 'Triceps Dips', reps: '15-20 (3 set)' },
    { name: 'Step-Ups', reps: '15-20 (4 set)' },
    { name: 'Jumping Lunges', reps: '15-20 (3 set)' },
    { name: 'Sprint Intervals', reps: '15-20 (3 set)' },
  ],
};

const improveHealthExercises = {
  category: 'Improve your Health',
  items: [
    { name: 'Treadmill Intervals', reps: '15–20 minute', screen: 'TreadmillIntervalsScreen' },
    { name: 'Deadlifts', reps: '10–14 (3 set)' },
    { name: 'Rowing Machine', reps: '5 minutes (3 set)' },
    { name: 'Kettlebell Swings', reps: '15–20 (3 set)' },
    { name: 'Battle Roper', reps: '3–5 set' },
  ],
};

const exercises = [loseWeightExercises, gainMuscleExercises, improveHealthExercises];

// 🔸 Component หลัก
export default function WorkoutTrackerScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['#92A3FD', '#9DCEFF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerBackground}
      />
      <View style={styles.headerContent}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={22} color="#000" />
          </TouchableOpacity>
          <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.title}>Exercise</Text>
          </View>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.indicator} />
        <ScrollView contentContainerStyle={styles.listContent} showsVerticalScrollIndicator={false}>
        {exercises.map((section, sIndex) => {
        const firstAvailableScreen = section.items.find(item => item.screen)?.screen;

      return (
      <View key={sIndex} style={styles.section}>
      <Text style={styles.sectionTitle}>{section.category}</Text>

      {section.items.map((exercise, eIndex) => (
        <View key={eIndex} style={styles.item}>
          <Text style={styles.exerciseName}>{exercise.name}</Text>
          <Text style={styles.reps}>{exercise.reps}</Text>
        </View>
      ))}

      
      {firstAvailableScreen && (
        <TouchableOpacity
          onPress={() => navigation.navigate(firstAvailableScreen)}
          style={styles.goButtonWrapper}
        >
          <LinearGradient
            colors={['#92A3FD', '#9DCEFF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.goButton}
          >
            <Text style={styles.goText}>Go</Text>
          </LinearGradient>
        </TouchableOpacity>
           )}
            </View>
           )
          })}
            
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 180,
  },
  headerContent: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  contentContainer: {
    flex: 0.95,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop: 60,
  },
  indicator: {
    alignSelf: 'center',
    width: 50,
    height: 4,
    borderRadius: 5,
    backgroundColor: '#ddd',
  },
  listContent: {
    paddingBottom: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconBtn: {
    padding: 6,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    color: '#000',
    right: 17,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
  },
  sectionTitle: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 10,
  },
  item: {
    marginBottom: 10,
  },
  exerciseName: {
    fontSize: 15,
    fontWeight: '500',
  },
  reps: {
    fontSize: 13,
    color: '#777',
  },
  goButton: {
    backgroundColor: '#A9C9FF',
    alignSelf: 'center',
    marginTop: 8,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 10,
    elevation: 2,
  },
  goText: {
    color: '#fff',
    fontWeight: '600',
  },
});