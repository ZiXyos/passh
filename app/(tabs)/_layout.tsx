import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '@/src/constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        }}>
        <Tabs.Screen
            name="index"
            options={{
                title: 'Home',
                tabBarIcon: ({ color }) =><TabBarIcon name="code" color={color}/>,
            }}
        />
        <Tabs.Screen name="manager.page"
            options={{
                title: 'manager',
                tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
            }}
        />
            <Tabs.Screen name='profile.page'
                options={{ headerShown: false, title: 'profile' }}
            />
        </Tabs>
    );
}
