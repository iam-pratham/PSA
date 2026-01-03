import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Settings, LogOut, ChevronRight, User, Shield, HelpCircle } from 'lucide-react-native';

export default function CoachProfile() {
    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            {/* Header */}
            <View className="px-6 pt-4 pb-2 flex-row justify-between items-center">
                <Text className="text-[26px] font-bold text-gray-900">Profile</Text>
            </View>

            <ScrollView contentContainerStyle={{ padding: 24, paddingTop: 10 }}>
                {/* Profile Card */}
                <View className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 items-center mb-8">
                    <View className="h-24 w-24 bg-gray-100 rounded-full mb-4 items-center justify-center border-4 border-gray-50">
                        <Text className="text-3xl font-bold text-gray-400">CN</Text>
                    </View>
                    <Text className="text-2xl font-bold text-gray-900">Coach Name</Text>
                    <Text className="text-gray-500 mb-4">Senior Football Coach</Text>

                    <View className="flex-row items-center bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
                        <User size={14} color="#0056DF" />
                        <Text className="text-primary font-bold text-xs uppercase ml-2">ID: PSA-CH-001</Text>
                    </View>
                </View>

                {/* Menu Options */}
                <View className="bg-white rounded-3xl p-2 shadow-sm border border-gray-100 mb-8">
                    {[
                        { icon: Settings, label: 'Account Settings', color: '#6B7280' },
                        { icon: Shield, label: 'Privacy & Security', color: '#6B7280' },
                        { icon: HelpCircle, label: 'Help & Support', color: '#6B7280' },
                    ].map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            className={`flex-row items-center justify-between p-4 ${index !== 2 ? 'border-b border-gray-50' : ''}`}
                        >
                            <View className="flex-row items-center">
                                <View className="h-10 w-10 bg-gray-50 rounded-full items-center justify-center mr-4">
                                    <item.icon size={20} color={item.color} />
                                </View>
                                <Text className="text-base font-semibold text-gray-900">{item.label}</Text>
                            </View>
                            <ChevronRight size={20} color="#D1D5DB" />
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Logout Button */}
                <TouchableOpacity className="flex-row items-center justify-center bg-red-50 p-4 rounded-2xl border border-red-100">
                    <LogOut size={20} color="#EF4444" />
                    <Text className="text-red-500 font-bold ml-2">Log Out</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}
