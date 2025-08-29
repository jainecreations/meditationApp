
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';

const sections = [
  {
    title: 'Yoga',
    image: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92',
  },
  {
    title: 'Meditation',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  },
  {
    title: 'Prayer',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
  },
];

export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      {/* <ThemedView style={styles.container} lightColor="#fff" darkColor="#151718"> */}
        <ThemedText type="title" style={styles.header}>Choose a Practice</ThemedText>
        <View style={styles.grid}>
          {sections.map((section) => (
            <TouchableOpacity
              key={section.title}
              activeOpacity={0.85}
              onPress={() => router.push({ pathname: '/details', params: { section: section.title } })}
            >
              <ThemedView style={styles.card} lightColor="#fff" darkColor="#222">
                <Image source={{ uri: section.image }} style={styles.image} />
                <ThemedText type="subtitle" style={styles.cardTitle}>{section.title}</ThemedText>
              </ThemedView>
            </TouchableOpacity>
          ))}
        </View>
      {/* </ThemedView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  header: {
    marginBottom: 24,
  },
  grid: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    width: 320,
    height: 240,
  },
  image: {
    width: 260,
    height: 140,
    borderRadius: 16,
    marginBottom: 16,
  },
  cardTitle: {
    textAlign: 'center',
    color: '#333',
  },
});
