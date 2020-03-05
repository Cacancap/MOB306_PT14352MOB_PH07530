import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import bgImage from './image/background.jpg';

import Main from './profile';
import Story from './profile/story.js';

export default function App() {
  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
    <ScrollView>
      <View style={{ flex: 1, alignItems: "center", marginTop: 100 }}>
        <Main />
        <Story />
      </View>
    </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundContainer: {
    flex: 1,
    backgroundColor: '#fff',
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
