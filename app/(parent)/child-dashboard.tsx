import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Settings, Award, Clock } from 'lucide-react-native';

export default function ChildDashboard() {
    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <View className="px-6 pt-4 pb-2 flex-row justify-between items-end">
                <View>
                    <Text className="text-gray-500 font-medium text-sm uppercase tracking-wider">Welcome Parent</Text>
                    <Text className="text-[26px] font-bold text-gray-900 mt-1">Child Overview</Text>
                </View>
                <TouchableOpacity className="h-10 w-10 bg-white rounded-full items-center justify-center shadow-sm mb-1">
                    <Settings size={20} color="#000" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 10, paddingBottom: 0 }}>
                {/* Profile Card */}
                <View className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 items-center mb-8">
                    <View className="h-24 w-24 bg-gray-100 rounded-full mb-4 items-center justify-center border-4 border-gray-50">
                        <Text className="text-3xl font-bold text-gray-400">AS</Text>
                    </View>
                    <Text className="text-2xl font-bold text-gray-900">Aarav Sharma</Text>
                    <Text className="text-gray-500 mb-4">Elite Football U-14</Text>

                    <View className="flex-row items-center bg-green-50 px-3 py-1.5 rounded-full border border-green-100">
                        <View className="h-2 w-2 rounded-full bg-green-500 mr-2" />
                        <Text className="text-green-700 font-bold text-xs uppercase">Fees Paid</Text>
                    </View>
                </View>

                {/* Stats */}
                <View className="flex-row gap-4 mb-8">
                    <View className="flex-1 bg-secondary p-5 rounded-3xl shadow-lg shadow-gray-400 h-40 justify-between">
                        <View>
                            <Text className="text-gray-400 font-medium text-xs uppercase tracking-wider mb-1">Attendance</Text>
                            <Text className="text-white text-3xl font-bold">85%</Text>
                        </View>
                        <Text className="text-primary text-xs font-medium">Excellent</Text>
                    </View>
                    <View className="flex-1 bg-white p-5 rounded-3xl border border-gray-100 shadow-sm h-40 justify-between">
                        <View>
                            <Text className="text-gray-400 font-medium text-xs uppercase tracking-wider mb-1">Next Session</Text>
                            <Text className="text-gray-900 text-3xl font-bold">Today</Text>
                        </View>
                        <View className="flex-row items-center bg-gray-50 self-start px-2 py-1 rounded-lg">
                            <Clock size={12} color="#4B5563" />
                            <Text className="text-gray-600 text-xs ml-1 font-medium">04:00 PM</Text>
                        </View>
                    </View>
                </View>

                {/* Recent Activity */}
                <View>
                    <Text className="text-lg font-bold text-gray-900 mb-4">Recent Sessions</Text>
                    {[1, 2, 3].map((_, i) => (
                        <View key={i} className="bg-white p-4 rounded-2xl mb-3 flex-row items-center border border-gray-100">
                            <View className="bg-gray-50 h-10 w-10 rounded-xl items-center justify-center mr-4">
                                <Text className="font-bold text-xs text-gray-500">2{4 - i}</Text>
                                <Text className="text-[10px] text-gray-400">OCT</Text>
                            </View>
                            <View className="flex-1">
                                <Text className="font-bold text-gray-900">Football Training</Text>
                                <Text className="text-gray-500 text-xs">04:00 PM - 05:30 PM</Text>
                            </View>
                            <View className="bg-green-100 px-2 py-1 rounded">
                                <Text className="text-green-700 text-xs font-bold">Present</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
