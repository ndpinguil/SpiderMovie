import { Stack, Link } from 'expo-router';
import { YStack, XStack, Text, Button } from 'tamagui';
import { Container, Main, Title, Subtitle, Button as TamaguiButton } from '../tamagui.config';

export default function Page() {
  return (
    <Container style={{ backgroundColor: 'lightblue' }}>
      <Main>
        <Stack.Screen options={{ title: 'Movie Making' }} />
        <YStack>
          <Title fontSize={35}>THE AMANZING SPIDERMAN</Title>
          <Subtitle>Andrew Garfield</Subtitle>
          <Text>Evaluacion Momento 3 previo a concluir el ciclo</Text>
          <Link href={{ pathname: '/step2', params: { name: 'Dan' } }} asChild>
            <TamaguiButton style={{ backgroundColor: '#007bff', marginTop: 20 }}>
              <Text style={{ color: '#fff' }}>Inicio</Text>
            </TamaguiButton>
          </Link>
        </YStack>
      </Main>
    </Container>
  );
}
