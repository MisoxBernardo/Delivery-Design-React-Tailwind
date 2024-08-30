import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export function Splash({ onAnimationFinish }: { onAnimationFinish: () => void }) {
  const animation = useRef<LottieView>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (animation.current) {
      animation.current.play();

      const timer = setTimeout(() => {
        setIsLoading(false); // Altera o estado quando o carregamento terminar
        onAnimationFinish(); // Chama a função passada quando o carregamento terminar
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!isLoading && animation.current) {
      animation.current.pause(); // Pausa a animação quando o carregamento termina
    }
  }, [isLoading]);

  return (
    <View style={styles.container}>
      <LottieView
        ref={animation}
        style={styles.animation}
        source={require('./splash.json')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  animation: {
    width: 300,
    height: 300,
  },
});
