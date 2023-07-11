import { 
  ContainerView,
  Typography,
  EmailInput,
  PasswordInput,
  Button
} from '@/components';
import { updateInputeValue } from '@/hooks';
import { ItemList } from '@/src/components/lists/list.item.component';
import { Item } from '@/types';
import { useState } from 'react';
import { Keyboard, ScrollView } from 'react-native';
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

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [items, setItem] = useState<Array<Item>>(fakeList);

  const handleItem = (newItem: Item) => {
    console.log(newItem);
    setItem([...items, newItem]);
    console.log(items);
  }
  
  return (
    <ContainerView style={{ paddingTop: inset.top }}>
      <Typography>Manage your password here</Typography>
      <ScrollView>
        {
          items.map((v, k) => <ItemList key={k} title={v.name} data={v.email}/>)
        }
      </ScrollView>
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
    </ ContainerView>
  );
}

