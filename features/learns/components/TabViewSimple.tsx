/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';
import {TabView} from 'react-native-tab-view';
import type {Props as TabViewProps} from 'react-native-tab-view/lib/typescript/TabView';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const tabRoutes = [
  {key: 'first', title: 'First'},
  {key: 'second', title: 'Second'},
] as const;

type TabRoutes = typeof tabRoutes;

type TabViewRoute = {
  key: TabRoutes[number]['key'];
  title: TabRoutes[number]['title'];
};

type RenderSceneProps = Parameters<
  TabViewProps<TabViewRoute>['renderScene']
>[0];
const renderScene = ({route}: RenderSceneProps) => {
  switch (route.key) {
    case 'first':
      return <FirstRoute />;
    case 'second':
      return <SecondRoute />;
    default:
      return null;
  }
};

const TabViewSimple = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [index, setIndex] = useState(0);
  const [routes] = useState<TabViewRoute[]>(
    tabRoutes as unknown as TabViewRoute[],
  );

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <TabView<TabViewRoute>
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
      />
    </SafeAreaView>
  );
};

export default TabViewSimple;
