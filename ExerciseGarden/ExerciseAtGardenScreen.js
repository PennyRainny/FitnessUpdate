import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'; 

const exercises1 = [
  { id: '1', name: 'Sprint Intervals', reps: '30 sec', sets: '5-10 set', screen: 'SprintIntervalsScreen' },
  { id: '2', name: 'Bench Jump', reps: '15-20', sets: '3 set', screen: 'BenchJumpScreen' },
  { id: '3', name: 'Triceps Dips', reps: '15-20', sets: '3 set', screen: 'TricepsDipsScreen' },
  { id: '4', name: 'Step-Ups', reps: '15-20', sets: '3 set', screen: 'StepUpsScreen' },
  { id: '5', name: 'Jumping Lunges', reps: '15-20', sets: '3 set', screen: 'JumpingLungesScreen' },
];

export default function ExerciseAtGardenScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Exercise at Garden</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Exercises</Text>

      <FlatList
        data={exercises1}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
                      style={styles.exerciseItem} 
                      onPress={() => navigation.navigate(item.screen)}
                    >
            <View>
              <Text style={styles.exerciseName}>{item.name}</Text>
              <Text style={styles.exerciseDetails}>
                {item.reps} <Text style={styles.sets}>({item.sets})</Text>
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="gray" />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20, 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  exerciseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  exerciseDetails: {
    fontSize: 14,
    color: '#666',
  },
  sets: {
    fontSize: 14,
    color: '#888',
  },
});
