import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
// import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { faPersonRunning } from '@fortawesome/free-solid-svg-icons/faPersonRunning'
import { faPersonBiking } from '@fortawesome/free-solid-svg-icons/faPersonBiking'
import { faPersonSwimming } from '@fortawesome/free-solid-svg-icons/faPersonSwimming'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import Icon from "react-native-vector-icons/FontAwesome";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faPersonRunning} />
            // <IconSymbol size={28} name="happy.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='explore'
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faPersonSwimming} />
            // <IconSymbol size={28} name='paperplane.fill' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='my-tabs'
        options={{
          title: "My tabs",
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faPersonBiking} />
            // <IconSymbol size={28} name='paperplane.fill' color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
