import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Phone, Lock } from 'lucide-react-native';

export default function ParentLogin() {
    const router = useRouter();
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');

    const handleLogin = () => {
        // Mock login
        router.replace('/(parent)/child-dashboard');
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className="flex-1"
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="px-6">
                    <View className="py-6">
                        <TouchableOpacity onPress={() => router.back()} className="h-10 w-10 bg-gray-50 rounded-full items-center justify-center">
                            <ArrowLeft size={20} color="#000" />
                        </TouchableOpacity>
                    </View>

                    <View className="mt-6 mb-10">
                        <Text className="text-3xl font-bold text-gray-900">Parent Login</Text>
                        <Text className="text-gray-500 mt-2 text-base">
                            Enter your mobile number to view your child's progress.
                        </Text>
                    </View>

                    <View>
                        <View className="mb-5">
                            <Text className="text-gray-700 font-medium mb-2 ml-1">Mobile Number</Text>
                            <View className="flex-row items-center bg-gray-50 border border-gray-200 rounded-2xl px-4 h-14">
                                <Phone size={20} color="#9CA3AF" />
                                <TextInput
                                    className="flex-1 ml-3 text-gray-900 font-medium text-base"
                                    placeholder="+1 234 567 8900"
                                    placeholderTextColor="#9CA3AF"
                                    value={phone}
                                    onChangeText={setPhone}
                                    keyboardType="phone-pad"
                                />
                            </View>
                        </View>

                        <View className="mb-8">
                            <Text className="text-gray-700 font-medium mb-2 ml-1">One Time Password (OTP)</Text>
                            <View className="flex-row items-center bg-gray-50 border border-gray-200 rounded-2xl px-4 h-14">
                                <Lock size={20} color="#9CA3AF" />
                                <TextInput
                                    className="flex-1 ml-3 text-gray-900 font-medium text-base"
                                    placeholder="123456"
                                    placeholderTextColor="#9CA3AF"
                                    value={otp}
                                    onChangeText={setOtp}
                                    keyboardType="number-pad"
                                    maxLength={6}
                                />
                            </View>
                        </View>

                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={handleLogin}
                            className="bg-secondary h-14 rounded-2xl items-center justify-center shadow-lg shadow-gray-400"
                        >
                            <Text className="text-white font-bold text-lg">Login</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
