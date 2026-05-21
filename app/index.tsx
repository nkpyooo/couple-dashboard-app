import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { ShoppingInput } from './components/ShoppingInput';
import { ShoppingListItem } from './components/ShoppingListItem';
import { useShoppingList } from './hooks/useShoppingList';

export default function HomeScreen() {
  const { items, isLoading, activeCount, addItem, toggleItem, removeItem } = useShoppingList();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>買い物リスト</Text>
        <Text style={styles.caption}>未チェック {activeCount} 件</Text>

        <ShoppingInput onSubmit={addItem} />

        {isLoading ? (
          <View style={styles.loadingWrap}>
            <ActivityIndicator color="#5C6BC0" />
            <Text style={styles.loadingText}>読み込み中...</Text>
          </View>
        ) : (
          <View>
            {items.map((item) => (
              <ShoppingListItem key={item.id} item={item} onToggle={toggleItem} onDelete={removeItem} />
            ))}
            {items.length === 0 ? <Text style={styles.empty}>まだ項目がありません。追加して始めましょう。</Text> : null}
          </View>
        )}
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB'
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1D2736'
  },
  caption: {
    marginTop: 6,
    marginBottom: 16,
    fontSize: 14,
    color: '#6B7684'
  },
  loadingWrap: {
    alignItems: 'center',
    paddingTop: 24
  },
  loadingText: {
    marginTop: 8,
    color: '#6B7684'
  },
  empty: {
    textAlign: 'center',
    color: '#7B8794',
    marginTop: 24
  }
});
