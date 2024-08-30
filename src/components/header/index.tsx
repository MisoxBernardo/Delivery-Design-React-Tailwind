import { View, Text, Pressable } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Href, useRouter } from 'expo-router';


export function Header() {
  const router = useRouter();

  const handlePress = () => {
    router.push('/settings' as Href); // Forçar tipo se necessário
  };

  return (
    <View className="w-full flex flex-row items-center justify-between">
       
      <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center shadow-2xl"
      onPress={handlePress}>
        <Ionicons name="menu" size={20} color="#121212" />
      </Pressable>

      <View className="flex flex-col items-center justify-center">
        <Text className="text-center text-sm text-slate-800">Localização</Text>

        <View className="flex-row items-center justify-center gap-1">
          <Feather name="map-pin" size={14} color="#FF0000" />
          <Text className="text-lg font-bold">Juiz de Fora</Text>
        </View>
      </View>

      <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center shadow-2xl">
        <Feather name="bell" size={20} color="#121212" />
      </Pressable>
    </View>
  );
}