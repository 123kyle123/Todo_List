import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const SelectedImage = ({ imageUri }) => {
  return (
    <View style={styles.container}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} />
      ) : (
        <View style={styles.placeholder}>
          <Image
            source={require('../assets/lol.jpg')}
            style={styles.placeholderImage}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: 2000,
    height: 2000,
    resizeMode: 'contain',
  },
  placeholder: {
    width: 200,
    height: 200,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default SelectedImage;
