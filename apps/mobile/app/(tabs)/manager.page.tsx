import { 
  ContainerView,
  Typography,
  ItemList,
  ScrollView,
  Button
} from '@/components';
import { RoundedButton } from '@/src/components/buttons/rbutton.component';
import { fetchLocalItems } from '@/src/hooks/data.hook';
import { getItem } from '@/src/services';
import {  RootTabScreenProps } from '@/src/types/navigation.type';
import { Item } from '@/types';
import { useTheme } from '@emotion/react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const fakeList: Array<Item> = [{
  name: 'twitter.com',
  email: 'email@test.com',
  password: 'password',
  links: ['https://twitter.com'],
  tags: ['']
}];

export default function ManagerScreen(
  { navigation, route }: RootTabScreenProps<'Manager'> 
) {

  const nav = useRouter();
  const inset = useSafeAreaInsets();
  const [itemsList, setItem] = useState<Array<Item>>(fakeList);

  const theme = useTheme();
  
  useEffect(() => {


  }, []);
  
  return (
    <ContainerView style={{ 
      paddingTop: inset.top
      , height: '100%', 
      flex: 1 
    }}>
      <Typography>
        Manage your password here
      </Typography>
      <ScrollView>
        {
          itemsList.map(
            (v, k) => <ItemList 
                key={k} 
                title={v.name} 
                data={v.email}
              />
            )
        }
      </ScrollView>
      <Button onPress={async () => {
        const li  = await fetchLocalItems('key');
        console.log(li);
      }}> 
        <Typography type='button'>Print debug</Typography>
      </Button>
        <RoundedButton label={"+"} 
          style={{ 
            position: 'absolute',
            alignSelf: 'flex-end', 
            bottom: theme.spacing.m,
            right: theme.spacing.m 
          }}
          onPress={() => navigation.navigate('AddPass')}
        >
          <Typography 
            type='button'
            color='secondary'
            adjustsFontSizeToFit={true} 
          >+</Typography>
        </RoundedButton>
    </ ContainerView>
  );
}
