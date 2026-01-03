import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User, Users, ChevronRight } from 'lucide-react-native';

export default function WelcomeScreen() {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-gray-50 px-6 justify-between py-10">
            <View className="mt-16">
                <View className="flex-row items-center mb-8">
                    <View className="bg-primary/10 px-4 py-2 rounded-full">
                        <Text className="text-primary font-bold tracking-widest text-xs uppercase">Official App</Text>
                    </View>
                </View>

                <Text className="text-[42px] font-black text-secondary leading-tight mb-6">
                    Parmanand Sports{'\n'}
                    <Text className="text-primary">Academy</Text>
                </Text>

                <Text className="text-gray-500 text-lg leading-8 pr-8">
                    Empowering the next generation of athletes with world-class training.
                </Text>
            </View>

            <View className="mb-10">
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => router.push('/auth/coach-login')}
                    className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex-row items-center justify-between mb-8"
                >
                    <View className="flex-row items-center gap-4">
                        <View className="h-12 w-12 bg-gray-100 rounded-full items-center justify-center">
                            <Users size={24} color="#111827" />
                        </View>
                        <View>
                            <Text className="text-xl font-semibold text-gray-900">Coach Panel</Text>
                            <Text className="text-gray-500">Manage batches & attendance</Text>
                        </View>
                    </View>
                    <View className="bg-gray-50 p-2 rounded-full">
                        <ChevronRight size={20} color="#9CA3AF" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => router.push('/auth/parent-login')}
                    className="bg-secondary p-6 rounded-3xl shadow-xl flex-row items-center justify-between"
                >
                    <View className="flex-row items-center gap-4">
                        <View className="h-12 w-12 bg-white/10 rounded-full items-center justify-center">
                            <User size={24} color="#FFFFFF" />
                        </View>
                        <View>
                            <Text className="text-xl font-semibold text-white">Parent Panel</Text>
                            <Text className="text-gray-400">Track progress & fees</Text>
                        </View>
                    </View>
                    <View className="bg-white/10 p-2 rounded-full">
                        <ChevronRight size={20} color="#FFFFFF" />
                    </View>
                </TouchableOpacity>
            </View>

            <View className="items-center">
                <Text className="text-gray-400 text-sm">Version 1.0.0</Text>
            </View>
        </SafeAreaView>
    );
}
