import { View } from 'react-native';
import { Typography } from '@/components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {

  const inset = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: inset.top }}>
      <Typography>Home Screen</Typography>
    </View>
  )
}

