/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useCallback, useRef} from 'react';
import {Button, View, Alert} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function App() {
  // const [playing, setPlaying] = useState(false);

  // const togglePlaying = useCallback(() => {
  //   setPlaying(prev => !prev);
  // }, []);

  return (
    <View>
      <YoutubePlayer height={300} videoId={'s-l8y4Lcc2Q'} />
    </View>
  );
}
