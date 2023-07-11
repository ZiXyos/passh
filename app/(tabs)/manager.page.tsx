import { 
  ContainerView,
  Typography,
  ItemList,
  ScrollView
} from '@/components';
import { RoundedButton } from '@/src/components/buttons/rbutton.component';
import { Item } from '@/types';
import { useTheme } from '@emotion/react';
import { FontAwesome } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const fakeList: Array<Item> = [{
  name: 'twitter.com',
  email: 'email@test.com',
  password: 'password',
  links: ['https://twitter.com'],
  tags: ['']
}];

export default function ManagerScreen() {

  const nav = useRouter();
  const inset = useSafeAreaInsets();
  const [items, setItem] = useState<Array<Item>>(fakeList);
  const theme = useTheme();
  
  return (
    <ContainerView style={{ paddingTop: inset.top, height: '100%', flex: 1 }}>
      <Typography>Manage your password here</Typography>
      <ScrollView>
        {
          items.map((v, k) => <ItemList key={k} title={v.name} data={v.email}/>)
        }

      </ScrollView>
        <RoundedButton label={"+"} 
          style={{ 
            position: 'absolute',
            alignSelf: 'flex-end', 
            bottom: theme.spacing.m,
            right: theme.spacing.m 
          }}
          onPress={() => nav.push('/add.screen')}
        >
          <Typography type='button' color='secondary' adjustsFontSizeToFit={true} >+</Typography>
        </RoundedButton>
    </ ContainerView>
  );
}
