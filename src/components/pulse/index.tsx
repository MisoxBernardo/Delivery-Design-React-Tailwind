// src/components/pulse/index.tsx
import React from 'react';
import { View } from 'react-native';
import { pulseConfig } from '../../config/pulseConfig';

interface PulseAnimationProps {
  containerClassName?: string; // Classes para o contêiner principal
  itemClassName?: string;      // Classes para os itens de pulso
  itemCount?: number;          // Número de itens a serem renderizados
  itemSize?: { width: number; height: number }; // Tamanho dos itens
}

export function PulseAnimation({
  containerClassName = pulseConfig.containerClassName,
  itemClassName = pulseConfig.itemClassName,
  itemCount = pulseConfig.defaultItemCount,
  itemSize = pulseConfig.defaultItemSize,
}: PulseAnimationProps) {
  const customItemClassName = `${itemClassName} w-[${itemSize.width}px] h-[${itemSize.height}px]`;

  return (
    <View className={containerClassName}>
      {[...Array(itemCount)].map((_, index) => (
        <View
          key={index}
          className={customItemClassName}
        />
      ))}
    </View>
  );
}
