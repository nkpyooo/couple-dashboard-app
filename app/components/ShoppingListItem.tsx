import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { ShoppingItem } from '../types/shopping';

type Props = {
  item: ShoppingItem;
  onToggle: (id: string) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
};

export function ShoppingListItem({ item, onToggle, onDelete }: Props) {
  return (
    <View style={styles.row}>
      <Pressable style={styles.checkArea} onPress={() => onToggle(item.id)}>
        <View style={[styles.checkCircle, item.checked && styles.checkedCircle]}>
          {item.checked ? <Text style={styles.checkMark}>✓</Text> : null}
        </View>
        <Text style={[styles.title, item.checked && styles.checkedTitle]}>{item.title}</Text>
      </Pressable>
      <Pressable onPress={() => onDelete(item.id)} hitSlop={8}>
        <Text style={styles.delete}>削除</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E6EAF2',
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 10
  },
  checkArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginRight: 12
  },
  checkCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1.5,
    borderColor: '#B8C2D1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkedCircle: {
    backgroundColor: '#5C6BC0',
    borderColor: '#5C6BC0'
  },
  checkMark: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 12
  },
  title: {
    fontSize: 16,
    color: '#1D2736'
  },
  checkedTitle: {
    color: '#7B8794',
    textDecorationLine: 'line-through'
  },
  delete: {
    color: '#D44B5F',
    fontSize: 14,
    fontWeight: '600'
  }
});
