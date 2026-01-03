import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronDown, BarChart2 } from 'lucide-react-native';

export default function CoachReports() {
    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <View className="px-6 pt-4 pb-2">
                <Text className="text-[26px] font-bold text-gray-900">Reports</Text>
                <TouchableOpacity className="flex-row items-center mt-2">
                    <Text className="text-lg font-medium text-primary mr-1">October 2023</Text>
                    <ChevronDown size={20} color="#0056DF" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 10, paddingBottom: 0 }}>
                {/* Premium Monthly Summary Card */}
                <View className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-8">
                    <View className="flex-row justify-between items-start mb-6">
                        <View>
                            <Text className="text-gray-500 font-medium text-xs uppercase tracking-wider mb-1">Avg. Attendance</Text>
                            <Text className="text-gray-900 text-4xl font-bold">85%</Text>
                        </View>
                        <View className="bg-green-50 px-3 py-1.5 rounded-full flex-row items-center border border-green-100">
                            {/* We'll use a simple text or icon here if imports allow, for now text */}
                            <Text className="text-green-700 font-bold text-xs">+5% vs Sep</Text>
                        </View>
                    </View>
                    <View className="flex-row items-center justify-between bg-gray-50 rounded-2xl py-5 px-6 border border-gray-100">
                        <View>
                            <Text className="text-gray-400 text-[10px] uppercase font-bold mb-1">Classes</Text>
                            <Text className="text-gray-900 text-xl font-bold">24</Text>
                        </View>
                        <View className="w-px h-10 bg-gray-200" />
                        <View className="pl-4 pr-2">
                            <Text className="text-gray-400 text-[10px] uppercase font-bold mb-1">Present</Text>
                            <Text className="text-gray-900 text-xl font-bold">540</Text>
                        </View>
                        <View className="w-px h-10 bg-gray-200" />
                        <View className="pl-4">
                            <Text className="text-gray-400 text-[10px] uppercase font-bold mb-1">Absent</Text>
                            <Text className="text-gray-900 text-xl font-bold">32</Text>
                        </View>
                    </View>
                </View>

                {/* Chart Section */}
                <View className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-8">
                    <View className="flex-row items-center justify-between mb-8">
                        <Text className="text-gray-900 font-bold text-lg">Weekly Trends</Text>
                    </View>
                    <View className="flex-row justify-between items-end h-40 px-2">
                        {[
                            { day: 'W1', h: 'h-24', val: '60%' },
                            { day: 'W2', h: 'h-32', val: '80%' },
                            { day: 'W3', h: 'h-28', val: '70%', active: true },
                            { day: 'W4', h: 'h-36', val: '90%' },
                        ].map((item, i) => (
                            <View key={i} className="items-center w-12">
                                <Text className="text-gray-400 text-[10px] mb-2">{item.val}</Text>
                                <View className={`w-10 rounded-t-lg ${item.active ? 'bg-primary shadow-lg shadow-blue-200' : 'bg-gray-100'} ${item.h}`} />
                                <Text className="text-gray-400 text-xs mt-3 font-medium">{item.day}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Students to Watch */}
                <View>
                    <Text className="text-lg font-bold text-gray-900 mb-4">Students to Watch</Text>
                    {[
                        { name: 'Rohan Mehta', rate: '45%', status: 'Low Attendance' },
                        { name: 'Aditya Patel', rate: '60%', status: 'Irregular' },
                        { name: 'Vihaan Gupta', rate: '55%', status: 'Warning' },
                        { name: 'Ishaan Kumar', rate: '25%', status: 'Critical' },
                        { name: 'Ananya S.', rate: '70%', status: 'Dropping' },
                    ].map((student, i) => (
                        <View key={i} className="bg-white p-4 rounded-2xl mb-3 flex-row items-center justify-between border border-gray-100 shadow-sm">
                            <View className="flex-row items-center">
                                <View className="h-10 w-10 bg-red-50 rounded-full items-center justify-center mr-3 border border-red-100">
                                    <Text className="font-bold text-red-500">{student.name.charAt(0)}</Text>
                                </View>
                                <View>
                                    <Text className="font-bold text-gray-900">{student.name}</Text>
                                    <Text className="text-red-500 text-xs font-medium">{student.status}</Text>
                                </View>
                            </View>
                            <Text className="font-bold text-gray-900">{student.rate}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
