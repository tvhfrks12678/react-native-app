/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useCallback, useRef} from 'react';
import {Button, View, Alert, Text, SafeAreaView} from 'react-native';
// import YouTube from 'react-native-youtube';
import YoutubePlayer from 'react-native-youtube-iframe';
import FlatlistSelectable from './features/learns/components/FlatlistSelectable';
import FlatListSimpleTest from './features/learns/components/FlatListSimpleTest';
import HeaderScrollableTabView from './features/learns/components/HeaderScrollableTabView';
import PullRefreshTabView from './features/learns/components/PullRefreshTabView';
import TabViewSimple from './features/learns/components/TabViewSimple';
import Basics from './features/learns/interpolate/Basics';

export default function App() {
  // const [playing, setPlaying] = useState(false);

  // const togglePlaying = useCallback(() => {
  //   setPlaying(prev => !prev);
  // }, []);

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        {/* <PullRefreshTabView /> */}
        {/* <HeaderScrollableTabView /> */}
        {/* <FlatlistSelectable /> */}
        {/* <FlatListSimpleTest /> */}
        {/* <TabViewSimple /> */}
        <Basics />
      </SafeAreaView>
    </>
  );
}
