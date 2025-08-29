import { ThemedText } from '@/components/ThemedText';
import { useLocalSearchParams } from 'expo-router';
import { Image, StyleSheet, View } from 'react-native';

const detailsData = {
  Yoga: {
    image: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Yoga is a group of physical, mental, and spiritual practices or disciplines.'
  },
  Meditation: {
    image: 'https://plus.unsplash.com/premium_photo-1722686468510-50697b1a9f38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Meditation is a practice where an individual uses a technique to train attention and awareness.'
  },
  Prayer: {
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    description: 'Prayer is an invocation or act that seeks to activate a rapport with an object of worship.'
  }
};

export default function DetailsScreen() {
  const { section } = useLocalSearchParams<{ section: string }>();
  const data = detailsData[section as keyof typeof detailsData];

  if (!data) return <ThemedText>Section not found.</ThemedText>;

  return (
    <View style={styles.container}>
      <ThemedText type="title">{section}</ThemedText>
      <Image source={{ uri: data.image }} style={styles.image} />
      <ThemedText style={styles.description}>{data.description}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 16,
    marginVertical: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});
