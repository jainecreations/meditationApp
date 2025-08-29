import { ThemedText } from '@/components/ThemedText';
import { ScrollView, StyleSheet, View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function VideosScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText type="title">Meditation Videos</ThemedText>
      <View style={styles.videoContainer}>
        <YoutubePlayer height={200} play={false} videoId={"inpok4MKVLM"} />
      </View>
      <View style={styles.videoContainer}>
        <YoutubePlayer height={200} play={false} videoId={"6p_yaNFSYao"} />
      </View>
      <View style={styles.videoContainer}>
        <YoutubePlayer height={200} play={false} videoId={"O-6f5wQXSu8"} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  videoContainer: {
    width: 320,
    height: 220,
    marginVertical: 12,
  },
});
