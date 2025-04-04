import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>👤 Your Profile</Text>
      </View>

      {/* Profile Picture */}
      <Image 
        source={{ uri: 'https://randomuser.me/api/portraits/men/45.jpg' }} // Professional photo placeholder
        style={styles.profileImage} 
      />
      
      {/* User Details */}
      <Text style={styles.name}>Harsh Pandey</Text>
      <Text style={styles.email}>📧 harshpandey21012@gmail.com</Text>
      <Text style={styles.location}>📍 Gorakhpur, Uttar Pradesh</Text>

      {/* Account Settings */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.option}>
          <Icon name="cog" size={20} color="#555" />
          <Text style={styles.optionText}>Account Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Icon name="lock" size={20} color="#555" />
          <Text style={styles.optionText}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Icon name="sign-out" size={20} color="#E91E63" />
          <Text style={[styles.optionText, { color: '#E91E63' }]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFBFC',
    paddingTop: 40,
  },
  header: {
    width: '100%',
    padding: 15,
    backgroundColor: '#E91E63',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#E91E63',
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginVertical: 5,
  },
  location: {
    fontSize: 16,
    color: '#444',
    marginBottom: 20,
  },
  section: {
    width: '90%',
    marginTop: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
});
