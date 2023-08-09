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
import EntityItem from "@/src/services/storage/entities/items.entity";
import { genKey } from "@/src/utils";
import { router, useNavigation } from "expo-router";
import { RootTabScreenProps } from "@/src/types/navigation.type";
import { getItem } from "@/src/services";

const AddScreen = ({
  route,
  navigation
}: RootTabScreenProps<'AddPass'>) => {

  const handleItem = (item: Item): EntityItem => {
    /* 
     * setup accessible state for the app ?? 
     * save it and when back update from the local store
    **/

    const itemEntity = new EntityItem({
      data: item 
    });

    const itemKey = genKey('key', item.name);
    itemEntity.save(itemKey); 
    return itemEntity;
  }

  const [name, setName] = useState<string>('default');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [link, setLink] = useState<[string]>(['']);

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
          const item = handleItem({
            email: email,
            password: password,
            name: name,
            tags: [''],
            links: link
          });

          console.log(`saving item ${item.data.name}`);
          Keyboard.dismiss();
          navigation.navigate('Manager', { items: item });
        }
      }>
        AddItem
      </Button>
    </ContainerView>
  );
}

export default AddScreen;
