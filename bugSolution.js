import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const imageUri = 'invalid-image-uri.jpg'; // or a URI that may be inaccessible

const BugSolution = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUri }}
        style={styles.image}
        onError={(error) => {
          console.error('Image load failed:', error);
          // Handle the error, e.g., display a placeholder image or message
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default BugSolution;