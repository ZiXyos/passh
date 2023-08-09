import { View } from 'react-native';
import { ContainerView, Typography } from '@/components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {

  const inset = useSafeAreaInsets();

  return (
    <ContainerView style={{ paddingTop: inset.top }}>
      <Typography>Home Screen</Typography>
    </ContainerView>
  )
}

