import {useContext} from 'react';
import {LevelContext} from './LevelContext';
import {Text} from 'react-native';

export default function Heading({children}) {
  const level = useContext(LevelContext);
  switch (level) {
    case 1:
      return (
        <>
          <Text>1111</Text>
          {children}
        </>
      );
    case 2:
      return (
        <>
          <Text>2222</Text>
          {children}
        </>
      );
    default:
      throw Error('Unknown level: ' + level);
  }
}
