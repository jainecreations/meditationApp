import { ThemedText } from '@/components/ThemedText';
import { Image } from 'expo-image';
import { ScrollView, StyleSheet } from 'react-native';

export default function ImagesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText type="title">Meditation Images</ThemedText>
      <Image source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' }} style={styles.image} />
      <Image source={{ uri: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca' }} style={styles.image} />
      <Image source={{ uri: 'https://images.unsplash.com/photo-1517841905240-472988babdf9' }} style={styles.image} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 300,
    height: 200,
    marginVertical: 12,
    borderRadius: 16,
  },
});
