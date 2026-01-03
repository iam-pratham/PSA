import { Tabs } from 'expo-router';
import { User, Calendar, CreditCard } from 'lucide-react-native';

export default function ParentLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#0056DF',
                tabBarInactiveTintColor: '#9CA3AF',
                tabBarStyle: {
                    backgroundColor: '#FFFFFF',
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
                name="child-dashboard"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => <User size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="attendance"
                options={{
                    title: 'History',
                    tabBarIcon: ({ color }) => <Calendar size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="fees"
                options={{
                    title: 'Fees',
                    tabBarIcon: ({ color }) => <CreditCard size={24} color={color} />,
                }}
            />
        </Tabs>
    );
}
