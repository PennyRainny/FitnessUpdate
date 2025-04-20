import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';

export default function CountdownScreen1({ navigation }) {
  const [count, setCount] = useState(5);
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    if (count > 0) {
      const interval = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      navigation.replace('NextScreen1');
    }
  }, [count]);

  const radius = 80;
  const strokeWidth = 20;
  const circumference = 2 * Math.PI * radius;
  const progress = ((5 - count) / 5) * circumference;

  return (
    <LinearGradient
                  colors={['#92A3FD', '#9DCEFF']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.container}
                >
    

      <Svg height="200" width="200">
        
        <Circle
          cx="100"
          cy="100"
          r={radius}
          stroke="#E0E0E0"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          cx="100"
          cy="100"
          r={radius}
          stroke="#2196F3"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          fill="none"
        />
      </Svg>
       
      <Text style={styles.countText}>{count > 0 ? count : 'Go!'}</Text>
      <Text style={styles.readyText}>{count > 1 ? 'Ready' : count === 1 ? 'Go!' : ''}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B2EBF2',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  countText: {
    
    fontSize: 40,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginTop: '70%',

  },
  readyText: {
    marginTop: 20,
    fontSize: 40,
    fontWeight: '600',
    color: '#fff',
  },
});
