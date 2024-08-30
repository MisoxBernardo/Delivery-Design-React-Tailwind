// src/app/index.tsx
import { Text, View, ScrollView } from "react-native";
import { Header } from "../components/header";
import React, { useState } from 'react';
import Constants from 'expo-constants';
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendigFoods } from '../components/trendig';
import { Restaurants } from "../components/restaurants";
import { RestaurantVerticalList } from '../components/list';
import { Splash } from '../components/splash';

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [trendigFoodsLoading, setTrendingFoodsLoading] = useState(true);
  const [restaurantsLoading, setRestaurantsLoading] = useState(true); // Adiciona estado de carregamento para restaurantes

  const handleAnimationFinish = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <Splash onAnimationFinish={handleAnimationFinish} />
      ) : (
        <ScrollView
          style={{ flex: 1 }}
          className="bg-slate-200"
          showsHorizontalScrollIndicator={false}
        >
          <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
            <Header />
            <Banner />
            <Search />
          </View>

          <Section
            name="Comidas em alta"
            label="Veja mais"
            action={() => console.log("CLICOU EM VEJA MAIS 1")}
            size="text-2xl"
            pulseItemCount={4}
            pulseItemSize={{ width: 80, height: 80 }}
          />

          <TrendigFoods onLoad={() => setTrendingFoodsLoading(false)} />

          <Section
            name="Famosos do dia"
            label="Veja mais"
            action={() => console.log("CLICOU EM VEJA MAIS FAMOSOS DO DIA")}
            size="text-xl"
            pulseItemCount={4}
            pulseItemSize={{ width: 80, height: 80 }}
          />

          <Restaurants onLoad={() => setRestaurantsLoading(false)} />

          <Section
            name="Restaurantes"
            label="Veja mais"
            action={() => console.log("CLICOU EM VEJA MAIS RESTAURANTES")}
            size="text-xl"
            pulseItemCount={4}
            pulseItemSize={{ width: 80, height: 80 }}
          />

          <RestaurantVerticalList onLoad={() => setRestaurantsLoading(false)} />
        </ScrollView>
      )}
    </>
  );
}
