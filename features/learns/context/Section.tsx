import {Text} from 'react-native';
import {LevelContext} from './LevelContext';

export default function Section({level, children}) {
  return (
    <>
      <Text>Section</Text>
      <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </>
  );
}
