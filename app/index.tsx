import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>夫婦共有生活ダッシュボード</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>今日の準備OK？</Text>
        <Text style={styles.cardBody}>この画面を起点に、買い物・映画・定型文の MVP を段階的に追加していきます。</Text>
      </View>

      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB',
    paddingHorizontal: 20,
    paddingTop: 24
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1D2736',
    marginBottom: 16
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E6EAF2'
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1D2736',
    marginBottom: 8
  },
  cardBody: {
    fontSize: 15,
    lineHeight: 22,
    color: '#455468'
  }
});
