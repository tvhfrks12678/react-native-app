/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useCallback, useRef} from 'react';
import {Button, View, Alert} from 'react-native';
// import YouTube from 'react-native-youtube';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function App() {
  // const [playing, setPlaying] = useState(false);

  // const togglePlaying = useCallback(() => {
  //   setPlaying(prev => !prev);
  // }, []);

  return (
    <View>
      {/* <YouTube
        videoId="KVZ-P-ZI6W4" // The YouTube video ID
        apiKey="YOUR_YOUTUBE_DEVELOPER_API_KEY_FOR_ANDROID"
        play // control playback of video with true/false
        fullscreen // control whether the video should play in fullscreen or inline
        loop // control whether the video should loop when ended
      /> */}
      <YoutubePlayer height={300} videoId={'s-l8y4Lcc2Q'} />
    </View>
  );
}
