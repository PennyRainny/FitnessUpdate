import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Database } from '../Database';
import { useUser } from '../UserContext';

export default function ProfileScreen({ navigation }) {
  const { username } = useUser();
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [age, setAge] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const { data, error } = await Database
          .from('personalinfo')
          .select('height, weight, birthdate')
          .eq('username', username)
          .single();
  
        if (data) {
          setHeight(data.height);
          setWeight(data.weight);
          if (data.birthdate) {
            const birth = new Date(data.birthdate);
            const today = new Date();
            let userAge = today.getFullYear() - birth.getFullYear();
            const m = today.getMonth() - birth.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
              userAge--;
            }
            setAge(userAge);
          }
        }
  
        if (error) console.error('Supabase error:', error.message);
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };
  
    fetchUserInfo();
  }, [username]);
  

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
        <View style={{ width: 35 }} />
      </View>

      {/* User Info */}
      <View style={styles.profileContainer}>
        <Image source={require('../assets/avatar.png')} style={styles.avatar} />
        <Text style={styles.name}>User</Text>
        <Text style={styles.sub}>Lose a Fat Program</Text>
      </View>

      {/* Stats */}
      <View style={styles.statRow}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{height || '--'}cm</Text>
          <Text style={styles.statLabel}>Height</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{weight || '--'}kg</Text>
          <Text style={styles.statLabel}>Weight</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{age !== null ? `${age}yo` : '--'}</Text>
          <Text style={styles.statLabel}>Age</Text>
        </View>
      </View>

      {/* Account Section */}
      <View style={styles.card}>
        <Text style={styles.Text1}>Account</Text>
        <View style={{ height: 20 }} />
        <TouchableOpacity style={styles.cardRow} onPress={() => navigation.navigate('EditProfile', { username })}>
          <Ionicons name="person-outline" size={24} color="#9CA3AF" />
          <Text style={styles.cardText}>Edit Profile</Text>
          <Ionicons name="chevron-forward" size={20} color="#ccc" style={{ marginLeft: 'auto' }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardRow} onPress={() => navigation.navigate('ChangetoPassword', { username })}>
          <Ionicons name="key-outline" size={24} color="#9CA3AF" />
          <Text style={styles.cardText}>Change to Password</Text>
          <Ionicons name="chevron-forward" size={20} color="#ccc" style={{ marginLeft: 'auto' }} />
        </TouchableOpacity>
      </View>

      {/* Other Section */}
      <View style={styles.card}>
        <Text style={styles.Text2}>Other</Text>
        <TouchableOpacity style={styles.cardRow} onPress={() => navigation.navigate('Logout')}>
          <Ionicons name="log-out-outline" size={25} color="#9CA3AF" />
          <Text style={styles.cardText}>Logout</Text>
          <Ionicons name="chevron-forward" size={20} color="#ccc" style={{ marginLeft: 'auto' }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backBtn: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 10,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },
  resetText: {
    color: '#EF4444',
    fontSize: 12,
    marginBottom: 6,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1D1617',
    marginTop: 4,
    marginBottom: 4,
  },
  sub: {
    fontSize: 12,
    color: '#7B6F72',
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    elevation: 5,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginHorizontal: 5,
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
    elevation: 5,
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6366F1',
  },
  statLabel: {
    fontSize: 12,
    color: '#7B6F72',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    elevation: 5,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardText: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 10,
    color: '#333',
  },
  Text1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
    color: '#000',
  },
  Text2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
    color: '#000',
  },
});