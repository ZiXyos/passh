import { 
  ContainerView, 
  Typography,
  EmailInput,
  PasswordInput,
  Button
} from "@/src/components";
import { updateInputeValue } from "@/src/hooks";
import { Item } from "@/src/types";

import { Keyboard } from "react-native";
import { useState } from "react";

const AddScreen = () => {

  const handleItem = (item: Item) => {
    /* 
     * setup accessible state for the app ?? 
     * save it and when back update from the local store
    **/
    console.log(item);
  }

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [link, setLink] = useState<string[]>(['']);

  return (
    <ContainerView >
      <Typography>Add new Item</Typography>
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
    </ContainerView>
  );
}

export default AddScreen;
