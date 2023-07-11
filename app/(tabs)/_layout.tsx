import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';

import Colors from '@/src/constants/Colors';

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
            tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
        }}>
        <Tabs.Screen
            name="index"
            options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({ color }) =><TabBarIcon name="code" color={color}/>,
            }}
        />
        <Tabs.Screen name="manager.page"
            options={{
                title: 'manager',
                headerShown: false,
                tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
            }}
        />
            <Tabs.Screen name='profile.page'
                options={{
                    title: 'profile',
                    tabBarIcon: ({ color }) => <TabBarIcon name='code' color={color} />,
                    headerShown: false, 
                }}
            />
        </Tabs>
    );
}
