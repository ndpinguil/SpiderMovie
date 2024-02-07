import { Stack, Link } from 'expo-router';
import { YStack } from 'tamagui';

import { Container, Main, Title, Subtitle, Button, ButtonText } from '../tamagui.config';

export default function Page() {
  return (
    <Container>
      <Main>
        <Stack.Screen options={{ title: 'Overview' }} />
        <YStack>
          <Title fontSize={35}>THE AMANZING SPIDERMAN</Title>
          <Subtitle>Andreaw Garfield</Subtitle>
        </YStack>
        <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <Button>
            <ButtonText>START</ButtonText>
          </Button>
        </Link>
      </Main>
    </Container>
  );
}
