import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Alert 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';
import { Database } from '../Database';
import { hashPassword } from '../hashPassword'; 
import { useUser } from '../UserContext';


function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState(''); // รับ username แทนอีเมล
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // ฟิลด์ยืนยันรหัสผ่าน
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { setUsername: setGlobalUsername } = useUser();
  
  //=========================================================================================================
  const handleSignUp = async () => {
    if (!username.trim()) {
      Alert.alert('Error', 'Please enter your username!');
      return;
    }
    if (!password) {
      Alert.alert('Error', 'Please enter your password!');
      return;
    }
    if (!confirmPassword) {
      Alert.alert('Error', 'Please confirm your password!');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }
  
    const newUser = {
      username: username.trim().toLowerCase(),
      password,
    };
  
    try {
      // 🔍 ตรวจสอบชื่อผู้ใช้ใน Supabase ก่อน
      const { data: existingUsers, error: fetchError } = await Database
        .from('userinfo')
        .select('username')
        .eq('username', newUser.username);
  
      if (fetchError) throw fetchError;
      if (existingUsers && existingUsers.length > 0) {
        Alert.alert('Error', 'User already exists!');
        return;
      }
  
      // ✅ บันทึกลง Supabase
      const { error: insertError } = await Database
        .from('userinfo')
        .insert([
          {
            username: newUser.username,
            passwordhash: await hashPassword(newUser.password),
          }
        ]);
  
      if (insertError) throw insertError;
  
      Alert.alert('Success', 'Account created successfully!');

    // ✅ เซต username เข้า context ก่อน navigate
    setGlobalUsername(newUser.username);
    navigation.navigate('CreateProfile');
    
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to create account!');
    }
  };
  
//====================================================================================================
  const handleGoogleLogin = () => {
    Alert.alert('Google Login', 'Google login');
  };

  const handleFacebookLogin = () => {
    Alert.alert('Facebook Login', 'Facebook login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hey there,</Text>
      <Text style={styles.title}>Create an Account</Text>

      {/* Username Field */}
      <View style={styles.inputContainer}>
        <Feather name="user" size={20} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#000"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      {/* Password Field */}
      <View style={styles.inputContainer}>
        <Feather name="lock" size={20} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#000"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Feather name={showPassword ? 'eye' : 'eye-off'} size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* Confirm Password Field */}
      <View style={styles.inputContainer}>
        <Feather name="lock" size={20} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#000"
          secureTextEntry={!showPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Feather name={showPassword ? 'eye' : 'eye-off'} size={20} color="black" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={() => setIsChecked(!isChecked)} style={styles.checkbox}>
          {isChecked && <View style={styles.checkedCircle} />}
        </TouchableOpacity>
        <Text style={styles.checkboxText}>
          By continuing you accept our Privacy Policy and Terms of Use
        </Text>
      </View>

      <LinearGradient
        colors={['#92A3FD', '#9DCEFF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.buttonContainer}
      >
        <TouchableOpacity onPress={handleSignUp} style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </LinearGradient>

      <Text style={styles.orText}>or</Text>

      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialCircle} onPress={handleGoogleLogin}>
          <AntDesign name="google" size={24} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialCircle} onPress={handleFacebookLogin}>
          <FontAwesome name="facebook" size={24} color="#3b5998" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  greeting: {
    fontSize: 18,
    color: '#000',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 15,
    width: '100%',
  },
  icon: {
    marginRight: 20,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxText: {
    fontSize: 10,
    color: '#000',
    marginLeft: 10,
  },
  checkedCircle: {
    width: 16,
    height: 16,
    borderRadius: 3,
    backgroundColor: '#000',
  },
  buttonContainer: {
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
  orText: {
    marginVertical: 20,
    textAlign: 'center',
    color: '#555',
    fontSize: 16,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  socialCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  signupText: {
    marginTop: 20,
    color: '#92A3FD',
  },
});

export default SignUpScreen;
