import {Text} from 'react-native';
import Heading from './Heading';
import Section from './Section';

export default function Page() {
  return (
    <>
      <Text>Page</Text>
      <Section level={1}>
        <Heading>
          <Text>Headiing</Text>
        </Heading>
      </Section>
      <Section level={2}>
        <Heading>
          <Text>Headiing</Text>
        </Heading>
      </Section>
    </>
  );
}
