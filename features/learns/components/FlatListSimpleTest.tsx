import React, {useRef} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Animated,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  // {
  //   id: '58694a0f-3da1-471f-bd96-145571e29d72',
  //   title: 'Third Item',
  // },
  // {
  //   id: '58694a0f-3da1-471f-bd96-145571e29d721',
  //   title: 'Third Item 1',
  // },
  // {
  //   id: '58694a0f-3da1-471f-bd96-145571e29d722',
  //   title: 'Third Item2',
  // },
  // {
  //   id: '58694a0f-3da1-471f-bd96-145571e29d723',
  //   title: 'Third Item3',
  // },
  // {
  //   id: '58694a0f-3da1-471f-bd96-145571e29d724',
  //   title: 'Third Item4',
  // },
  // {
  //   id: '58694a0f-3da1-471f-bd96-145571e29d725',
  //   title: 'Third Item5',
  // },
  // {
  //   id: '58694a0f-3da1-471f-bd96-145571e29d726',
  //   title: 'Third Item6',
  // },
  // {
  //   id: '58694a0f-3da1-471f-bd96-145571e29d727',
  //   title: 'Third Item7',
  // },
  // {
  //   id: '58694a0f-3da1-471f-bd96-145571e29d728',
  //   title: 'Third Item8',
  // },
  // {
  //   id: '58694a0f-3da1-471f-bd96-145571e29d729',
  //   title: 'Third Item9',
  // },
  // {
  //   id: '58694a0f-3da1-471f-bd96-145571e29d7210',
  //   title: 'Third Item10',
  // },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const FlatListSimpleTest = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollY}}}],
          {useNativeDriver: false},
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default FlatListSimpleTest;
