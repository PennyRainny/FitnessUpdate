import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Database } from '../Database';
import { hashPassword } from '../hashPassword'; 
import { useUser } from '../UserContext';


export default function ChangePasswordScreen() {
  const { username } = useUser();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  //==========================================================================================
  const handleChangePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'New Password and Confirm Password do not match.');
      return;
    }

    try {
      // แฮชรหัสผ่าน
      const hashedCurrent = await hashPassword(currentPassword);
      const hashedNew = await hashPassword(newPassword);

      // ดึงข้อมูลจาก Supabase
      const { data: user, error } = await Database
        .from('userinfo')
        .select('passwordhash')
        .eq('username', username)
        .single();

      if (error || !user) {
        Alert.alert('Error', 'User not found.');
        return;
      }

      if (user.passwordhash !== hashedCurrent) {
        Alert.alert('Error', 'Current password is incorrect.');
        return;
      }

      const { error: updateError } = await Database
        .from('userinfo')
        .update({ passwordhash: hashedNew })
        .eq('username', username);

      if (updateError) {
        Alert.alert('Error', 'Failed to update password.');
        return;
      }

      Alert.alert('Success', 'Your password has been changed.');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Unexpected error occurred.');
    }
  };

//============================================================================================

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change Password</Text>
      
      <View style={styles.form}>
        {/* Current Password */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#aaa" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Current Password"
            secureTextEntry={!showCurrent}
            value={currentPassword}
            onChangeText={setCurrentPassword}
          />
          <TouchableOpacity onPress={() => setShowCurrent(!showCurrent)}>
            <Ionicons
              name={showCurrent ? "eye" : "eye-off"}
              size={20}
              color="#aaa"
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>

        {/* New Password */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#aaa" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="New Password"
            secureTextEntry={!showNew}
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <TouchableOpacity onPress={() => setShowNew(!showNew)}>
            <Ionicons
              name={showNew ? "eye" : "eye-off"}
              size={20}
              color="#aaa"
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Confirm New Password */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#aaa" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Confirm New Password"
            secureTextEntry={!showConfirm}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
            <Ionicons
              name={showConfirm ? "eye" : "eye-off"}
              size={20}
              color="#aaa"
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>

        {/* ปุ่ม Submit ด้วย LinearGradient */}
        <LinearGradient
          colors={['#92A3FD', '#9DCEFF']} // ไล่สีจากฟ้าอ่อนไปฟ้าเข้ม
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.buttonContainer}
        >
          <TouchableOpacity onPress={handleChangePassword} style={styles.button}>
            <Text style={styles.buttonText}>ChangePassword</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 40,
  },
  form: {
    // คุณสามารถปรับสไตล์เพิ่มเติมได้ตามต้องการ
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20, // โค้งมน
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#f9f9f9", // พื้นหลังอ่อน ๆ
    height: 60, 
  },
  icon: {
    marginRight: 10,
  },
  eyeIcon: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 15,
    fontSize: 16,
    color: "#000",
  },
  buttonContainer: {
    borderRadius: 30, // เพิ่มความโค้งให้ปุ่ม
    overflow: "hidden",
    marginTop: 30, // ลดระยะห่างจากขอบเพื่อให้เหมาะสมกับหน้าจอ
  },
  button: {
    paddingVertical: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
