import { ContainerView, Typography } from '@/src/components';
import { EmailInput, PasswordInput } from '@/src/components/inputs/input.component';
import { updateInputeValue } from '@/src/hooks/input.hook';

import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export default function ManagerScreen() {
  const inset = useSafeAreaInsets();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  
  return (
    <ContainerView style={{ paddingTop: inset.top }}>
      <Typography>Manage your password here</Typography>
      <EmailInput placeholder='email'
        value={email} 
        onChange={ e => updateInputeValue(e, setEmail) }
      />
      <PasswordInput placeholder='password'
        onChange={(e) => updateInputeValue(e, setPassword)}
        value={password}
      />
    </ ContainerView>
  );
}

