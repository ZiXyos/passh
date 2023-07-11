import { 
  ContainerView,
  Typography,
  ItemList,
  ScrollView
} from '@/components';
import { Item } from '@/types';
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

  const inset = useSafeAreaInsets();
  const [items, setItem] = useState<Array<Item>>(fakeList);
  
  return (
    <ContainerView style={{ paddingTop: inset.top, height: '100%' }}>
      <Typography>Manage your password here</Typography>
      <ScrollView>
        {
          items.map((v, k) => <ItemList key={k} title={v.name} data={v.email}/>)
        }
      </ScrollView>
    </ ContainerView>
  );
}
/*
 *
      <EmailInput placeholder='email'
        value={email} 
        onChange={ e => updateInputeValue(e, setEmail) }
      />
      <PasswordInput placeholder='password'
        onChange={(e) => updateInputeValue(e, setPassword)}
        value={password}
      />

      <Button label={'push'} 
        onPress={() =>{ 
          console.log(email, password);
          handleItem({
            email: email,
            password: password,
            name: 'default',
            tags: [''],
            links: ['https://google.com']
          });
          Keyboard.dismiss();
        }
      }>
        AddItem
      </Button>
*/

