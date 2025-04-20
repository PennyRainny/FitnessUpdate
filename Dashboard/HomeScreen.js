import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import WorkoutTrackerScreen from './WorkoutTrackerScreen';
import FoodScreen from './FoodScreen';
import SearchScreen from './SearchScreen';
import ProfileScreen from './ProfileScreen';
import { useUser } from '../UserContext';

const Tab = createBottomTabNavigator();

function HomeScreen({ route }) {
  const { username } = useUser(); // ✅ ใช้จาก context
  const [selected, setSelected] = useState('Weekly');
  const [showOptions, setShowOptions] = useState(false);
  const [calories, setCalories] = useState(0);

  useFocusEffect(
    useCallback(() => {
      const incomingCalories = route.params?.calories;
      if (incomingCalories) {
        setCalories((prev) => prev + incomingCalories);
      }
    }, [route.params?.calories])
  );

  const toggleOptions = () => setShowOptions(!showOptions);
  const selectOption = (option) => {
    setSelected(option);
    setShowOptions(false);
  };


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Welcome, {username || 'Guest'}!</Text>

      <View style={styles.section}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.title}>Day and Week</Text>
          <View style={styles.selectorContainer}>
            <TouchableOpacity style={styles.button1} activeOpacity={0.8} onPress={toggleOptions}>
              <Text style={styles.text}>{selected}</Text>
              <Ionicons name="chevron-down" size={16} color="#fff" />
            </TouchableOpacity>
            {showOptions && (
              <View style={styles.dropdown}>
                {['Weekly', 'Daily'].map((option) => (
                  <TouchableOpacity key={option} onPress={() => selectOption(option)} style={styles.option}>
                    <Text style={styles.optionText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>

        <View style={styles.graphPlaceholder}>
          {selected === 'Weekly' ? (
            <Text style={{ color: '#333', fontWeight: 'bold' }}>
              Weekly Calories Burned: {calories} kcal
            </Text>
          ) : (
            <Text style={{ color: '#333', fontWeight: 'bold' }}>
              Today's Calories Burned: {calories} kcal
            </Text>
          )}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>"Challenge Todays"</Text>
        <WorkoutCard title="Bupees" image={require('../assets/Bupees1.png')} />
        <WorkoutCard title="Triceps Dips" image={require('../assets/Dips.png')} />
      </View>
    </ScrollView>
  );
}

function WorkoutCard({ title, image }) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.exerciseTitle}>{title}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: '#000' }}>Finish</Text>
        </TouchableOpacity>
      </View>
      <Image source={image} style={styles.exerciseImage} />
    </View>
  );
}

function CustomTabBarButton({ children, onPress }) {
  return (
    <TouchableOpacity style={styles.floatingButton} onPress={onPress} activeOpacity={0.6}>
      {children}
    </TouchableOpacity>
  );
}

export default function BottomTabs({ route }) {


  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="home" size={24} color={focused ? '#A26EFF' : '#bbb'} />
          ),
        }}
      />
      <Tab.Screen
        name="WorkoutTracker"
        component={WorkoutTrackerScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="analytics" size={24} color={focused ? '#A26EFF' : '#bbb'} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="search" size={28} color="white" />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Food"
        component={FoodScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="fast-food" size={24} color={focused ? '#A26EFF' : '#bbb'} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="person" size={24} color={focused ? '#A26EFF' : '#bbb'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  section: {
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  graphPlaceholder: {
    marginTop: 10,
    height: 150,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#A9C9FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    elevation: 4,
    alignSelf: 'flex-end',
    marginTop: -30,
    marginRight: 15,
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    marginRight: 4,
    fontSize: 15,
  },
  dropdown: {
    position: 'absolute',
    top: 35,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 5,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    zIndex: 10,
  },
  option: {
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  optionText: {
    color: '#333',
    fontSize: 16,
  },
  card: {
    marginBottom: 15,
    height: 130,
    marginTop: 15,
    backgroundColor: '#f8faff',
    borderRadius: 20,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  exerciseTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    borderRadius: 25,
    alignSelf: 'flex-start',
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  exerciseImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
  },
  tabBar: {
    position: 'absolute',
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 70,
    elevation: 10,
    bottom: -10,
  },
  floatingButton: {
    top: -25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7B9BFF',
    width: 65,
    height: 65,
    borderRadius: 35,
  },
  selectorContainer: {
    position: 'relative',
    zIndex: 10,
  },
});
