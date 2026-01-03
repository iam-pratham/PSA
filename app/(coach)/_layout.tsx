import { Tabs } from 'expo-router';
import { Users, BarChart2, User, ClipboardList } from 'lucide-react-native';

export default function CoachLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#0056DF', // Blue
                tabBarInactiveTintColor: '#9CA3AF',
                tabBarStyle: {
                    backgroundColor: '#FFFFFF', // White background
                    borderTopColor: '#F3F4F6',
                    paddingTop: 5,
                },
                tabBarLabelStyle: {
                    marginBottom: 4,
                    fontSize: 10,
                    fontWeight: '600'
                }
            }}
        >
            <Tabs.Screen
                name="batches"
                options={{
                    title: 'Batches',
                    tabBarIcon: ({ color }) => <Users size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="reports"
                options={{
                    title: 'Reports',
                    tabBarIcon: ({ color }) => <BarChart2 size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => <User size={24} color={color} />,
                }}
            />

        </Tabs>
    );
}
