// src/components/list/index.tsx
import { View } from 'react-native';
import { useEffect, useState } from 'react'; 
import { RestaurantItem } from './item';
import { PulseAnimation } from '../pulse';

export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
}

interface RestaurantVerticalListProps {
  onLoad?: () => void; // Adiciona uma prop para chamar a função após a carga
}

export function RestaurantVerticalList({ onLoad }: RestaurantVerticalListProps) {
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getRestaurants() {
      try {
        const response = await fetch("http://192.168.3.5:3000/restaurants");
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error(error);
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
    return <PulseAnimation itemCount={4} itemSize={{ width: 80, height: 80 }} />;
  }

  return (
    <View className="px-4 flex-1 w-full h-full mb-11 gap-4">
      {restaurants.map(item => (
        <RestaurantItem item={item} key={item.id} />
      ))}
    </View>
  );
}
