import { Stack, Link } from 'expo-router';
import { Image, YStack } from "tamagui";

import { Container, Main, Title, Subtitle, Button, ButtonText } from '../tamagui.config';

export default function Page() {
  return (
    <Container style={{backgroundColor: '#350A24', textAlign: 'center', justifyContent:'center', fontStyle:'Inter' }}>
      <Main justifyContent='center' alignItems='center'>
        <Stack.Screen options={{ title: '🕸️MOVIE🕷️'}} />
        <Image
          source={require('../assets/Camera.png')}/>
        <YStack>
          <Title style={{ color: 'white', fontSize: 20, fontWeight: 'bold',  }}>THE AMAZING SPIDERMAN</Title>
          <Subtitle textAlign='center' style={{ color: '#ffffff', marginBottom: 20 }}>Andrew Garfield</Subtitle>
          
        </YStack>
        <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <Button backgroundColor='#752D59' width='40%'>
            <ButtonText>INICIO</ButtonText>
          </Button>
        </Link>
      </Main>
    </Container>
  );
}
