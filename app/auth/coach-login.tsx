import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Mail, Lock } from 'lucide-react-native';

export default function CoachLogin() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Mock login
        router.replace('/(coach)/batches');
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
                        <Text className="text-3xl font-bold text-gray-900">Coach Login</Text>
                        <Text className="text-gray-500 mt-2 text-base">
                            Enter your credentials to access the dashboard.
                        </Text>
                    </View>

                    <View>
                        <View className="mb-5">
                            <Text className="text-gray-700 font-medium mb-2 ml-1">Email Address</Text>
                            <View className="flex-row items-center bg-gray-50 border border-gray-200 rounded-2xl px-4 h-14">
                                <Mail size={20} color="#9CA3AF" />
                                <TextInput
                                    className="flex-1 ml-3 text-gray-900 font-medium text-base"
                                    placeholder="coach@psa.com"
                                    placeholderTextColor="#9CA3AF"
                                    value={email}
                                    onChangeText={setEmail}
                                    autoCapitalize="none"
                                />
                            </View>
                        </View>

                        <View className="mb-3">
                            <Text className="text-gray-700 font-medium mb-2 ml-1">Password</Text>
                            <View className="flex-row items-center bg-gray-50 border border-gray-200 rounded-2xl px-4 h-14">
                                <Lock size={20} color="#9CA3AF" />
                                <TextInput
                                    className="flex-1 ml-3 text-gray-900 font-medium text-base"
                                    placeholder="••••••••"
                                    placeholderTextColor="#9CA3AF"
                                    value={password}
                                    onChangeText={setPassword}
                                    secureTextEntry
                                />
                            </View>
                        </View>

                        <View className="items-end mb-8">
                            <Text className="text-gray-500 font-medium py-2">Forgot Password?</Text>
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
