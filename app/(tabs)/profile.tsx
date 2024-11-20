import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function ProfileScreen({ navigation }) {
  const [user, setUser] = useState({
    name: 'Maulana Al-Ghofiqi',
    email: 'emaul@gmail.com',
    phone: '+62 812 3456 789',
    bio: 'Math Enthusiast and Problem Solver',
  });

  const handleEditProfile = () => {

    console.log('Edit Profile Pressed');
  };

  const handleLogout = () => {

    console.log('Logout Pressed');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'data:image/jpeg;base64,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' }} // Placeholder for profile picture
        style={styles.profileImage}
      />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Text style={styles.phone}>{user.phone}</Text>
      <Text style={styles.bio}>{user.bio}</Text>

      <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFE6DD',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#A1887F',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4E342E',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#5D4037',
    marginBottom: 5,
  },
  phone: {
    fontSize: 16,
    color: '#5D4037',
    marginBottom: 10,
  },
  bio: {
    fontSize: 14,
    color: '#8D6E63',
    marginBottom: 30,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  editButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#4E342E',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  editButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#A1887F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  logoutButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
