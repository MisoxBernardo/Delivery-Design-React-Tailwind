// src/components/restaurants/index.tsx
import { FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { RestaurantItem } from './horizontal';
import { PulseAnimation } from '../pulse'; // Certifique-se de importar o PulseAnimation

export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
  rating: string;
}

interface RestaurantsPropsWithOnLoad {
  onLoad?: () => void; // Adiciona a prop onLoad
}

export function Restaurants({ onLoad }: RestaurantsPropsWithOnLoad) {
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getRestaurants() {
      try {
        const response = await fetch("http://192.168.3.5:3000/restaurants");
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        if (onLoad) {
          onLoad();
        }
      }
    }
    getRestaurants();
  }, [onLoad]);

  if (loading) {
    return (
      <PulseAnimation 
        itemCount={4} // Ajuste o número de itens do pulse conforme necessário
        itemSize={{ width: 80, height: 80 }} // Ajuste o tamanho dos itens do pulse conforme necessário
      />
    );
  }

  return (
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <RestaurantItem item={item} />}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
