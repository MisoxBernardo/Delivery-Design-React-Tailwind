// src/components/trendig/index.tsx
import { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { CardHorizontalFood } from './food';
import { PulseAnimation } from '../pulse';

export interface FoodProps {
  id: string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restaurantId: string;
}

interface TrendigFoodsProps {
  onLoad?: () => void;
}

export function TrendigFoods({ onLoad }: TrendigFoodsProps) {
  const [foods, setFoods] = useState<FoodProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getFoods() {
      try {
        const response = await fetch("http://192.168.3.5:3000/foods");
        const data = await response.json();
        setFoods(data);
      } catch (error) {
        console.error(error);
        // Você pode adicionar um estado adicional para tratar erros se desejar
      } finally {
        setLoading(false);
        if (onLoad) {
          onLoad();
        }
      }
    }
    getFoods();
  }, [onLoad]);

  if (loading) {
    return (
      <View style={styles.container}>
        <PulseAnimation 
          itemCount={4} // Ajuste o número de itens do pulse conforme necessário
          itemSize={{ width: 80, height: 80 }} // Ajuste o tamanho dos itens do pulse conforme necessário
        />
      </View>
    );
  }

  return (
    <FlatList
      data={foods}
      renderItem={({ item }) => <CardHorizontalFood food={item} />}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20, // Ajuste o padding para garantir que o PulseAnimation tenha espaço suficiente
  },
});
