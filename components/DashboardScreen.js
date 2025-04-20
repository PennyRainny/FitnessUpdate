import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, ProgressBar } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';

const DashboardScreen = () => {
  return (
    <ScrollView style={styles.container}> 
      <Text style={styles.header}>Welcome Back, {'\n'} Stefani Wong</Text>
      
      <Card style={styles.card}> 
        <Text style={styles.cardTitle}>BMI (Body Mass Index)</Text>
        <Text style={styles.cardText}>You have a normal weight</Text>
      </Card>

      <Card style={styles.card}> 
        <View style={styles.targetContainer}>
          <Text style={styles.cardTitle}>Today Target</Text>
          <TouchableOpacity style={styles.checkButton}>
            <Text style={styles.checkButtonText}>Check</Text>
          </TouchableOpacity>
        </View>
      </Card>

      <Text style={styles.sectionTitle}>Activity Status</Text>
      <Card style={styles.card}> 
        <Text style={styles.cardTitle}>Heart Rate</Text>
        <View style={styles.heartRateContainer}>
          <Text style={styles.heartRate}>78 BPM</Text>
          <Text style={styles.heartRateSubtext}>3 mins ago</Text>
        </View>
        <LineChart
          data={{
            labels: ['1', '2', '3', '4', '5'],
            datasets: [{ data: [70, 80, 75, 78, 74] }],
          }}
          width={300}
          height={200}
          chartConfig={{
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          style={{ borderRadius: 16 }}
        />
      </Card>

      <Card style={styles.card}> 
        <Text style={styles.cardTitle}>Water Intake</Text>
        <Text style={styles.cardText}>4 Liters</Text>
        <ProgressBar progress={0.8} color='#000000' style={styles.progressBar} />
      </Card>

      <Card style={styles.card}> 
        <Text style={styles.cardTitle}>Sleep</Text>
        <Text style={styles.cardText}>8h 20m</Text>
        <ProgressBar progress={0.7} color='#000000' style={styles.progressBar} />
      </Card>

      <Card style={styles.card}> 
        <Text style={styles.cardTitle}>Calories Burned</Text>
        <Text style={styles.cardText}>760 kCal</Text>
        <ProgressBar progress={0.6} color='#000000' style={styles.progressBar} />
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 80, backgroundColor: '#f9f9f9' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 30 },
  card: { marginBottom: 20, padding: 15, borderRadius: 20, backgroundColor: '#ffffff' },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#000000' },
  cardText: { fontSize: 16, marginTop: 5, color: '#000000' },
  heartRateContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  heartRate: { fontSize: 22, color: '#000000' },
  heartRateSubtext: { fontSize: 14, color: '#666666' },
  targetContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  checkButton: { backgroundColor: '#000000', paddingVertical: 5, paddingHorizontal: 15, borderRadius: 20 },
  checkButtonText: { color: '#ffffff', fontWeight: 'bold' },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
  progressBar: { height: 10, borderRadius: 5 },
});

export default DashboardScreen;
