import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Check, X, MoreVertical } from 'lucide-react-native';

const STUDENTS = [
    { id: '1', name: 'Aarav Sharma', feesPaid: true, status: 'present' },
    { id: '2', name: 'Vihaan Gupta', feesPaid: false, status: 'present' },
    { id: '3', name: 'Ishaan Kumar', feesPaid: true, status: 'absent' },
    { id: '4', name: 'Aditya Patel', feesPaid: true, status: null },
    { id: '5', name: 'Reyansh Singh', feesPaid: false, status: null },
    { id: '6', name: 'Arjun Reddy', feesPaid: true, status: null },
    { id: '7', name: 'Sai Krishna', feesPaid: true, status: null },
    { id: '8', name: 'Rohan Mehta', feesPaid: true, status: null },
];

export default function MarkAttendance() {
    const router = useRouter();
    const { name } = useLocalSearchParams();
    const [attendance, setAttendance] = useState(STUDENTS);

    const toggleAttendance = (id: string, status: 'present' | 'absent') => {
        setAttendance(prev => prev.map(student =>
            student.id === id ? { ...student, status } : student
        ));
    };

    const submitAttendance = () => {
        Alert.alert('Success', 'Attendance submitted successfully', [
            { text: 'OK', onPress: () => router.back() }
        ]);
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            {/* Header */}
            <View className="px-4 py-4 flex-row items-center justify-between">
                <View className="flex-row items-center">
                    <TouchableOpacity onPress={() => router.back()} className="h-10 w-10 bg-white rounded-full items-center justify-center mr-3 shadow-sm">
                        <ArrowLeft size={20} color="#000" />
                    </TouchableOpacity>
                    <View>
                        <Text className="text-sm text-gray-500">Mark Attendance</Text>
                        <Text className="text-xl font-bold text-gray-900">{name}</Text>
                    </View>
                </View>
                <TouchableOpacity className="h-10 w-10 bg-white rounded-full items-center justify-center shadow-sm">
                    <MoreVertical size={20} color="#000" />
                </TouchableOpacity>
            </View>

            {/* List */}
            <FlatList
                data={attendance}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ padding: 16, paddingBottom: 120 }}
                renderItem={({ item }) => (
                    <View className="flex-row items-center justify-between p-4 bg-white rounded-2xl mb-3 shadow-sm border border-gray-100">
                        <View className="flex-row items-center flex-1">
                            <View className="h-12 w-12 bg-gray-100 rounded-full items-center justify-center mr-3">
                                <Text className="text-gray-600 font-bold text-lg">{item.name.charAt(0)}</Text>
                            </View>
                            <View>
                                <Text className="text-base font-semibold text-gray-900">{item.name}</Text>
                                <View className="flex-row items-center mt-1">
                                    <View className={`h-2 w-2 rounded-full mr-1.5 ${item.feesPaid ? 'bg-green-500' : 'bg-red-500'}`} />
                                    <Text className={`text-xs font-medium ${item.feesPaid ? 'text-green-600' : 'text-red-600'}`}>
                                        {item.feesPaid ? 'Fees Paid' : 'Fees Pending'}
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View className="flex-row gap-2">
                            <TouchableOpacity
                                onPress={() => toggleAttendance(item.id, 'present')}
                                className={`h-10 w-10 rounded-full items-center justify-center border ${item.status === 'present'
                                    ? 'bg-green-100 border-green-500'
                                    : 'bg-white border-gray-200'
                                    }`}
                            >
                                <Check size={18} color={item.status === 'present' ? '#10B981' : '#D1D5DB'} />
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => toggleAttendance(item.id, 'absent')}
                                className={`h-10 w-10 rounded-full items-center justify-center border ${item.status === 'absent'
                                    ? 'bg-red-100 border-red-500'
                                    : 'bg-white border-gray-200'
                                    }`}
                            >
                                <X size={18} color={item.status === 'absent' ? '#EF4444' : '#D1D5DB'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

            <View className="absolute bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-100 pb-8 shadow-lg">
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={submitAttendance}
                    className="bg-secondary h-14 rounded-2xl items-center justify-center shadow-lg shadow-gray-400"
                >
                    <Text className="text-white font-bold text-lg">Submit Attendance</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
