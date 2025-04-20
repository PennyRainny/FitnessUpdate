import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>FitnestV</Text>
        <Text style={styles.subtitle}>Everybody can Train</Text>
      </View>

      <LinearGradient
        colors={['#92A3FD', '#9DCEFF']} // ไล่สีจากฟ้าอ่อน (92A3FD) ไปฟ้าเข้ม (9DCEFF)
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.buttonContainer}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('GetBurn')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // เปลี่ยนพื้นหลังเป็นสีขาว
    paddingHorizontal: 20, // เพิ่ม padding ด้านข้าง
    
  },
  header: {
    flex: 1, // ใช้พื้นที่ด้านบน
    justifyContent: 'center', // จัดข้อความให้ตรงกลางแนวตั้ง
    alignItems: 'center', // จัดข้อความให้ตรงกลางแนวนอน
    backgroundColor: '#FFFFFF', // เปลี่ยนพื้นหลังเป็นสีขาว
  },
  title: {
    fontSize: 49,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    color: '#000',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#666',
    fontWeight: '500',
    marginBottom: 10,
   
  },
  gradientText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  buttonContainer: {
    borderRadius: 50, // ทำให้ปุ่มเป็นวงกลม
    padding: 5, // เพิ่มระยะห่างรอบๆ ปุ่ม
    width: 250, // กำหนดขนาดของปุ่ม
    height: 50, // กำหนดความสูงของปุ่ม
    justifyContent: 'center', // จัดตำแหน่งตัวอักษรให้กลาง
    alignItems: 'center', // จัดตำแหน่งตัวอักษรให้กลาง
    marginBottom: 25,
  },
  button: {
    borderRadius: 50, // ขอบโค้งมน
    
  },
  buttonText: {
    color: '#fff', // ตัวอักษรเป็นสีขาว
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
