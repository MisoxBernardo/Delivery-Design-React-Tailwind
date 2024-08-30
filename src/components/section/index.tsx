// src/components/section/index.tsx
import { View, Text, Pressable } from 'react-native';
import { PulseAnimation } from '../pulse'; // Certifique-se de importar corretamente
import { pulseConfig } from '../../config/pulseConfig';

interface Props {
  name: string;
  size: "text-lg" | "text-xl" | "text-2xl";
  label: string;
  action: () => void;
  isLoading?: boolean; // Adiciona uma prop para gerenciar o estado de carregamento
  pulseContainerClassName?: string; // Classes para o contêiner do pulse
  pulseItemClassName?: string;      // Classes para os itens de pulse
  pulseItemCount?: number;          // Número de itens no pulse
  pulseItemSize?: { width: number; height: number }; // Tamanho personalizado para os itens de pulse
}

export function Section({
  name,
  size,
  label,
  action,
  isLoading = false, // Define um padrão para isLoading
  pulseContainerClassName = pulseConfig.containerClassName,
  pulseItemClassName = pulseConfig.itemClassName,
  pulseItemCount = pulseConfig.defaultItemCount,
  pulseItemSize = pulseConfig.defaultItemSize
}: Props) {
  return (
    <View className='w-full flex flex-row items-center justify-between px-4'>
      {isLoading ? (
        <PulseAnimation
          containerClassName={pulseContainerClassName}
          itemClassName={pulseItemClassName}
          itemCount={pulseItemCount}
          itemSize={pulseItemSize}
        />
      ) : (
        <>
          <Text className={`${size} font-semibold my-4 self-start`}>
            {name}
          </Text>

          <Pressable onPress={action}>
            <Text>{label}</Text>
          </Pressable>
        </>
      )}
    </View>
  );
}
