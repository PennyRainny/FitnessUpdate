import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Logout() {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Logout</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
    text1: {
            fontSize: 18,
            fontWeight: '700',
            textAlign: 'center',   
            marginTop:'50%',
    },
});