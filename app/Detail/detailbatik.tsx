import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function DetailBatikScreen({ route, navigation }) {
  const { batikId } = route.params; 
  const appData = require('../../data/appdata.json'); 
  const batik = appData.batiks.find((item: { id: any; }) => batiks.id === batikId); 

  if (!batik) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Detail Batik tidak ditemukan.</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>Kembali</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>

      <Image source={{ uri: batik.image }} style={styles.image} />

      <Text style={styles.title}>{batik.name}</Text>
      <Text style={styles.origin}>Asal: {batik.origin}</Text>

      <Text style={styles.sectionTitle}>Deskripsi</Text>
      <Text style={styles.description}>{batik.description}</Text>

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Kembali</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFE6DD',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4E342E',
    marginBottom: 8,
  },
  origin: {
    fontSize: 16,
    color: '#5D4037',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4E342E',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#5D4037',
    lineHeight: 24,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#4E342E',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  backButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorText: {
    fontSize: 18,
    color: '#B71C1C',
    textAlign: 'center',
    marginBottom: 20,
  },
});
