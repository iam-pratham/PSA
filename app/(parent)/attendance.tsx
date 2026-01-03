import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';

const DAYS = Array.from({ length: 31 }, (_, i) => {
    // 2 is the offset because Month starts on Tuesday (based on the empty views)
    // 0 = Sun, 1 = Mon, ..., 6 = Sat
    const dayOfWeek = (i + 2) % 7;
    return {
        day: i + 1,
        status: Math.random() > 0.8 ? 'absent' : 'present', // Mock data
        isWeekend: dayOfWeek === 0 || dayOfWeek === 6
    };
});

export default function AttendanceHistory() {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="px-6 pt-4 pb-2">
                <Text className="text-[26px] font-bold text-gray-900 mb-6">Attendance</Text>

                {/* Month Selector */}
                <View className="flex-row items-center justify-between bg-gray-50 p-4 rounded-2xl mb-8">
                    <ChevronLeft size={20} color="#000" />
                    <Text className="font-bold text-lg">October 2023</Text>
                    <ChevronRight size={20} color="#000" />
                </View>

                {/* Legend */}
                <View className="flex-row justify-center mb-8">
                    <View className="flex-row items-center mr-8">
                        <View className="h-3 w-3 rounded-full bg-green-500 mr-2" />
                        <Text className="text-gray-500 text-sm">Present</Text>
                    </View>
                    <View className="flex-row items-center">
                        <View className="h-3 w-3 rounded-full bg-red-500 mr-2" />
                        <Text className="text-gray-500 text-sm">Absent</Text>
                    </View>
                </View>

                {/* Calendar Grid */}
                <View className="flex-row flex-wrap">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                        <Text key={d} className="w-[14.28%] text-center text-gray-400 font-medium mb-4 text-xs">{d}</Text>
                    ))}
                    {/* Offset for start of month (Tuesday start) */}
                    <View className="w-[14.28%]" />
                    <View className="w-[14.28%]" />

                    {DAYS.map((item) => (
                        <View key={item.day} className="w-[14.28%] items-center mb-6">
                            <View className={`h-8 w-8 items-center justify-center rounded-full ${item.isWeekend
                                ? 'bg-transparent'
                                : item.status === 'present' ? 'bg-green-100' : 'bg-red-100'
                                }`}>
                                <Text className={`text-xs font-bold ${item.isWeekend
                                    ? 'text-gray-300'
                                    : item.status === 'present' ? 'text-green-700' : 'text-red-600'
                                    }`}>{item.day}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </SafeAreaView>
    );
}
