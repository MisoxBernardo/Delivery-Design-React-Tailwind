// src/pages/settings.tsx
import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function Settings() {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push('/'); // Navega para a página inicial
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Page</Text>
      <Pressable
        onPress={handleBackToHome}
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: '#007BFF',
          borderRadius: 5,
        }}
      >
        <Text style={{ color: '#fff' }}>Voltar para Home</Text>
      </Pressable>
    </View>
  );
}
