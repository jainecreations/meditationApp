
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

const sections = [
  {
    title: 'Yoga',
    image: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Meditation',
    image: 'https://plus.unsplash.com/premium_photo-1722686468510-50697b1a9f38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
      <ScrollView  contentContainerStyle={{ flexGrow: 1, alignItems: 'center', padding: 20 }}>
        {/* <ThemedView style={styles.container} lightColor="#fff" darkColor="#151718"> */}
          {/* <ThemedText type="title" style={styles.header}>Choose a Practice</ThemedText> */}
          <ThemedText type="title">Choose a Practice</ThemedText>
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
      </ScrollView>
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
    top: 20,
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    width: 320,
    height: 240,
  },
  image: {
    width: "100%",
    height: "80%",
    borderRadius: 16,
    marginBottom: 16,
  },
  cardTitle: {
    textAlign: 'center',
    color: '#333',
  },
});
