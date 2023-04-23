import {
  Animated,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import React from 'react';

const Basics = () => {
  const dummyData = [
    'Text',
    'Input',
    'Button',
    'Card',
    'CheckBox',
    'Divider',
    'Header',
    'List Item',
    'Pricing',
    'Rating',
    'Search Bar',
    'Slider',
    'Tile',
    'Icon',
    'Avatar',
  ];
  let AnimatedHeaderValue = new Animated.Value(0);
  const Header_Maximum_Height = 150;
  const Header_Minimum_Height = 50;

  const animateHeaderBackgroundColor = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
    outputRange: ['#4286F4', '#00BCD4'],
    extrapolate: 'clamp',
  });

  const animateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
    outputRange: [Header_Maximum_Height, Header_Minimum_Height],
    extrapolate: 'clamp',
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.header,
            {
              height: animateHeaderHeight,
              backgroundColor: animateHeaderBackgroundColor,
            },
          ]}>
          <Text style={styles.headerText}>React Native Collapsible</Text>
        </Animated.View>
        <ScrollView
          scrollEventThrottle={16}
          contentContainerStyle={{paddingTop: Header_Maximum_Height}}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: AnimatedHeaderValue}}}],
            {useNativeDriver: false},
          )}>
          {dummyData.map((item, index) => (
            <Text style={styles.textStyle} key={index}>
              {item}
            </Text>
          ))}
          <Text style={styles.textStyle}>Input</Text>
          <Text style={styles.textStyle}>Button</Text>
          <Text style={styles.textStyle}>Card</Text>
          <Text style={styles.textStyle}>CheckBox</Text>
          <Text style={styles.textStyle}>Divider</Text>
          <Text style={styles.textStyle}>Header</Text>
          <Text style={styles.textStyle}>List Item</Text>
          <Text style={styles.textStyle}>Pricing</Text>
          <Text style={styles.textStyle}>Rating</Text>
          <Text style={styles.textStyle}>Search Bar</Text>
          <Text style={styles.textStyle}>Slider</Text>
          <Text style={styles.textStyle}>Tile</Text>
          <Text style={styles.textStyle}>Icon</Text>
          <Text style={styles.textStyle}>Avatar</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  textStyle: {
    textAlign: 'center',
    color: '#000',
    fontSize: 18,
    padding: 20,
  },
});

export default Basics;
