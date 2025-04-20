import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity , Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { Database } from '../Database';
import { useUser } from '../UserContext';


function ImageWithText({ navigation }) {
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const { username } = useUser(); // ✅ ดึงจาก custom hook

  const handleNext = async () => {
    if (!gender || !birthDate || !weight || !height) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (!username) {
      Alert.alert('Error', 'User not found. Please log in again.');
      return;
    }

    try {
      const { error: insertError } = await Database
        .from('personalinfo')
        .insert([{
          username,
          gender,
          birthdate: birthDate,
          weight,
          height,
        }]);

      if (insertError) {
        console.error('Insert Error:', insertError);
        Alert.alert('Error', 'Failed to save profile info');
        return;
      }

      navigation.navigate('GoalSelectionScreen'); // ✅ ไม่ต้องส่ง username แล้ว

    } catch (error) {
      console.error('handleNext Error:', error);
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image 
        source={{ uri: 'https://drive.google.com/uc?id=130K6bLrDVQgchQmTyqfX1uaqcRwFpmup' }} 
        style={styles.image} 
      />
      <Text style={styles.caption}>Let’s complete your profile</Text>
      <Text style={styles.subText}>It will help us to know more about you!</Text>

      <View style={styles.inputContainer}>
  <View style={styles.inputWrapper}>
    <AntDesign name="user" size={20} color="#aaa" style={styles.icon} />
    <TextInput
      style={styles.input}
      placeholder="Choose Gender"
      placeholderTextColor="#aaa"
      value={gender}
      onChangeText={setGender}
    />
  </View>

  <View style={styles.inputWrapper}>
    <AntDesign name="calendar" size={20} color="#aaa" style={styles.icon} />
    <TextInput
      style={styles.input}
      placeholder="Date of Birth"
      placeholderTextColor="#aaa"
      value={birthDate}
      onChangeText={setBirthDate}
    />
  </View>

  <View style={styles.inputWrapper}>
    <AntDesign name="pluscircle" size={20} color="#aaa" style={styles.icon} />
    <TextInput
      style={styles.input}
      placeholder="Weight (kg)"
      placeholderTextColor="#aaa"
      keyboardType="numeric"
      value={weight}
      onChangeText={setWeight}
    />
  </View>

  <View style={styles.inputWrapper}>
    <AntDesign name="arrowsalt" size={20} color="#aaa" style={styles.icon} />
    <TextInput
      style={styles.input}
      placeholder="Height (cm)"
      placeholderTextColor="#aaa"
      keyboardType="numeric"
      value={height}
      onChangeText={setHeight}
    />
  </View>
</View>

      <LinearGradient
        colors={['#92A3FD', '#9DCEFF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.buttonContainer}
      >
        <TouchableOpacity onPress={handleNext} style={styles.button}>
          <Text style={styles.buttonText}> NEXT </Text>
        </TouchableOpacity>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 16 / 15,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  caption: {
    marginTop: 30,
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subText: {
    marginTop: 5,
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
    lineHeight: 26,
  },
  inputContainer: {
    marginTop: 20,
    gap: 15,
  },
  input: {
    flex: 1, // ให้ input ขยายเต็มพื้นที่ที่เหลือ
    paddingHorizontal: 10,
    color: '#000',
    borderWidth: 0, // เอาขอบออก
  },
  buttonContainer: {
    marginTop: 30,
    borderRadius: 50,
    padding: 5,
    width: '100%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
  
  },
  icon: {
    marginRight: 10,
  },
});

export default ImageWithText