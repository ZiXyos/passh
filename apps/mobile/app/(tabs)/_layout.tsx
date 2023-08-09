import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { theme } from '@/src/style';
import { BlurView } from 'expo-blur';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {

    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: theme.color.secondary,
            tabBarInactiveTintColor: theme.color.spaceCadet,
            tabBarStyle: { backgroundColor: theme.color.background, borderTopWidth: 0},
            tabBarBackground: () => <BlurView intensity={100} />
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
                title: 'Manager',
                headerShown: false,
                tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
            }}
            initialParams={{ items: [] }}
        />
            <Tabs.Screen name='profile.page'
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => <TabBarIcon name='code' color={color} />,
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}
