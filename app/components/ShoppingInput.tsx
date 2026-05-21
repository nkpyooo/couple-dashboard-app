import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

type Props = {
  onSubmit: (title: string) => Promise<void>;
};

export function ShoppingInput({ onSubmit }: Props) {
  const [value, setValue] = useState('');

  const handleAdd = async () => {
    if (!value.trim()) {
      return;
    }
    await onSubmit(value);
    setValue('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder="例: 牛乳"
        placeholderTextColor="#9AA6B2"
        style={styles.input}
        returnKeyType="done"
        onSubmitEditing={handleAdd}
      />
      <Pressable style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>追加</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16
  },
  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E6EAF2',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: '#1D2736'
  },
  button: {
    backgroundColor: '#5C6BC0',
    borderRadius: 12,
    paddingHorizontal: 16,
    justifyContent: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15
  }
});
