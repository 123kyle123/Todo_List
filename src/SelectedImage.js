import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';

const SelectedImage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.label}>Kyle L. Ratilla</Text>
        <Text style={styles.label}>20211138</Text>
        <Text style={styles.label}>IT35B</Text>
        <Text style={styles.label}>APPLICATION DEV. EMERGING TECHNOLOGIES</Text>
        <Text style={styles.label}>App Dev</Text>
        <Text style={styles.label}>2023-2024</Text>
      </View>
      <View style={styles.column}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/kyle.jpg')} style={styles.image} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Display items in a row
    alignItems: 'center', // Center vertically
    marginTop: 10,
  },
  column: {
    flex: 1, // Take up equal space
    paddingHorizontal: 10, // Add some space around each column
    backgroundColor: '#D9EDBF', // Background color
    borderRadius: 10, // Rounded corners
    paddingVertical: 10, // Vertical padding
  },
  label: {
    marginBottom: 10,
    fontSize: 16,
  },
  imageContainer: {
    borderRadius: 50,
    overflow: 'hidden', 
  },
  image: {
    width: 200,
    height: 150,
  },
});

export default SelectedImage;
