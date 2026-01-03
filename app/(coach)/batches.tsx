import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Clock, Calendar, ChevronRight, Users } from 'lucide-react-native';

const BATCHES = [
    { id: '1', name: 'Elite Football U-14', time: '04:00 PM - 05:30 PM', age: '10-14 Years', students: 24, days: 'Mon, Wed, Fri' },
    { id: '2', name: 'Beginner Basketball', time: '04:00 PM - 05:00 PM', age: '6-9 Years', students: 18, days: 'Tue, Thu' },
    { id: '3', name: 'Advanced Swimming', time: '06:00 AM - 07:30 AM', age: '12+ Years', students: 12, days: 'Daily' },
    { id: '4', name: 'Tennis Foundation', time: '05:00 PM - 06:00 PM', age: '8-12 Years', students: 8, days: 'Sat, Sun' },
    { id: '5', name: 'Cricket Development', time: '04:30 PM - 06:30 PM', age: '12-16 Years', students: 30, days: 'Mon, Wed, Fri' },
    { id: '6', name: 'Badminton Pro', time: '06:00 PM - 07:30 PM', age: '10-15 Years', students: 16, days: 'Tue, Thu, Sat' },
    { id: '7', name: 'Morning Athletics', time: '05:30 AM - 07:00 AM', age: '14+ Years', students: 20, days: 'Daily' },
    { id: '8', name: 'Teen Yoga & Fitness', time: '07:00 AM - 08:00 AM', age: '13-18 Years', students: 15, days: 'Sat, Sun' },
];

export default function BatchSelection() {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <View className="px-6 pt-4 pb-2">
                <View className="flex-row justify-between items-end">
                    <View>
                        <Text className="text-gray-500 font-medium text-sm uppercase tracking-wider">Welcome Coach</Text>
                        <Text className="text-[26px] font-bold text-gray-900 mt-1">Select Batch</Text>
                    </View>
                    <View className="h-10 w-10 bg-white rounded-full items-center justify-center shadow-sm">
                        <Calendar size={20} color="#000" />
                    </View>
                </View>
            </View>

            <FlatList
                data={BATCHES}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 24, paddingBottom: 0 }}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => router.push(`/batch-attendance/${item.id}?name=${encodeURIComponent(item.name)}`)}
                        className="bg-white rounded-3xl p-5 mb-5 shadow-sm border border-gray-100"
                    >
                        <View className="flex-row justify-between items-start mb-4">
                            <View className="bg-gray-50 px-3 py-1 rounded-full">
                                <Text className="text-xs font-bold text-gray-600 uppercase">{item.days}</Text>
                            </View>
                            {item.id === '1' && (
                                <View className="bg-primary/20 px-3 py-1 rounded-full">
                                    <Text className="text-xs font-bold text-black uppercase">Next Up</Text>
                                </View>
                            )}
                        </View>

                        <Text className="text-xl font-bold text-gray-900 mb-1">{item.name}</Text>

                        <View className="flex-row items-center space-x-4 mt-3">
                            <View className="flex-row items-center border border-gray-100 rounded-full px-3 py-1 bg-gray-50/50">
                                <Clock size={14} color="#6B7280" />
                                <Text className="text-gray-600 text-xs ml-2 font-medium">{item.time}</Text>
                            </View>
                            <View className="flex-row items-center border border-gray-100 rounded-full px-3 py-1 bg-gray-50/50">
                                <Users size={14} color="#6B7280" />
                                <Text className="text-gray-600 text-xs ml-2 font-medium">{item.students} Students</Text>
                            </View>
                        </View>

                        <View className="absolute bottom-5 right-5 h-8 w-8 bg-secondary rounded-full items-center justify-center">
                            <ChevronRight size={16} color="#FFFFFF" />
                        </View>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
}
