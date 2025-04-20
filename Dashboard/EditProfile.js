import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import { Database } from '../Database';
import { useUser } from '../UserContext';

export default function EditProfile({ navigation, }) {
  const { username } = useUser();

  const [Fname, setFname] = useState('');
  const [Lname, setLname] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Permission Denied", "We need access to your photos to choose a profile image.");
      return;
    }
  
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
  
    if (!result.canceled && result.assets && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      setProfileImage(uri);  // อัปเดตเฉพาะใน local state
    }
  };

  //==========================================================================================================
  const handleSave = async () => {
    if (!Fname || !Lname) {
      Alert.alert("Error", "Please fill in all required fields (First Name and Last Name).");
      return;
    }
  
    try {
      // Update user data in the database without updating profile image
      const { error } = await Database
        .from('personalinfo')
        .update({
          firstname: Fname,
          lastname: Lname,
          weight: weight,
          height: height,
        })
        .eq('username', username);
  
      if (error) {
        console.error("Update error:", error);
        Alert.alert("Error", "Failed to update profile.");
        return;
      }
  
      // Successful update
      Alert.alert("Success", "Profile updated successfully.");
      navigation.goBack();
    } catch (err) {
      console.error("Save error:", err);
      Alert.alert("Error", "Something went wrong.");
    }
  };
  
//============================================================================================================



  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>Edit Profile</Text>

      {/* Profile Image Picker */}
      <TouchableOpacity onPress={pickImage} style={styles.avatarWrapper}>
        <Image
          source={profileImage ? { uri: profileImage } : require('../assets/avatar.png')}
          style={styles.avatar}
        />
        <Text style={styles.changePhotoText}>Change Profile Photo</Text>
      </TouchableOpacity>

      {/* Form Inputs */}
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#aaa" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={Fname}
            onChangeText={setFname}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#aaa" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={Lname}
            onChangeText={setLname}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="scale-outline" size={20} color="#aaa" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your weight (kg)"
            value={weight}
            onChangeText={setWeight}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="resize-outline" size={20} color="#aaa" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your height (cm)"
            value={height}
            onChangeText={setHeight}
            keyboardType="numeric"
          />
        </View>

        {/* Save Button */}
        <LinearGradient
          colors={['#92A3FD', '#9DCEFF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.buttonContainer}
        >
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Save Changes</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 30 },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 40,
  },
  avatarWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  changePhotoText: {
    marginTop: 8,
    fontSize: 14,
    color: '#6366F1',
  },
  form: {
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
    height: 60,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 15,
    fontSize: 16,
    color: '#000',
  },
  buttonContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 40,
  },
  button: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});