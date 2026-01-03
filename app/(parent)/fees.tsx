import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AlertCircle, CheckCircle, Download } from 'lucide-react-native';

export default function FeesScreen() {
    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <View className="px-6 pt-4 pb-2">
                <Text className="text-[26px] font-bold text-gray-900 mb-6">Fees & Invoices</Text>

                {/* Current Status Card */}
                <View className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-6">
                    <View className="flex-row items-center justify-between mb-4">
                        <Text className="text-gray-500 font-medium uppercase text-xs tracking-wider">Current Status</Text>
                        <View className="flex-row items-center bg-yellow-50 px-3 py-1 rounded-full border border-yellow-100">
                            <AlertCircle size={12} color="#D97706" />
                            <Text className="text-yellow-700 font-bold text-xs uppercase ml-1.5">Pending</Text>
                        </View>
                    </View>

                    <Text className="text-4xl font-bold text-gray-900 mb-1">₹1,500.00</Text>
                    <Text className="text-red-500 text-sm font-medium mb-6">Due by November 5th, 2023</Text>

                    <TouchableOpacity className="bg-secondary w-full py-4 rounded-2xl shadow-sm items-center justify-center">
                        <Text className="text-white font-bold text-lg">Pay Now</Text>
                    </TouchableOpacity>
                </View>

                {/* History */}
                <Text className="text-lg font-bold text-gray-900 mb-4">Payment History</Text>

                <View>
                    <View className="bg-white p-4 rounded-2xl flex-row items-center justify-between border border-gray-100 mb-3">
                        <View className="flex-row items-center">
                            <View className="h-10 w-10 bg-gray-100 rounded-full items-center justify-center mr-3">
                                <Text className="font-bold text-gray-600 text-xs">OCT</Text>
                            </View>
                            <View>
                                <Text className="font-bold text-gray-900">Monthly Academy Fee</Text>
                                <Text className="text-gray-500 text-xs">Paid on Oct 1st</Text>
                            </View>
                        </View>
                        <Text className="font-bold text-gray-900">₹1500.00</Text>
                    </View>

                    <View className="bg-white p-4 rounded-2xl flex-row items-center justify-between border border-gray-100">
                        <View className="flex-row items-center">
                            <View className="h-10 w-10 bg-gray-100 rounded-full items-center justify-center mr-3">
                                <Text className="font-bold text-gray-600 text-xs">SEP</Text>
                            </View>
                            <View>
                                <Text className="font-bold text-gray-900">Monthly Academy Fee</Text>
                                <Text className="text-gray-500 text-xs">Paid on Sep 2nd</Text>
                            </View>
                        </View>
                        <Text className="font-bold text-gray-900">₹1500.00</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
