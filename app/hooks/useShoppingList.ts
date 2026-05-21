import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useMemo, useState } from 'react';

import type { ShoppingItem } from '../types/shopping';

const STORAGE_KEY = 'shopping-list-items-v1';

export function useShoppingList() {
  const [items, setItems] = useState<ShoppingItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadItems() {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw) as ShoppingItem[];
          setItems(parsed);
        }
      } finally {
        setIsLoading(false);
      }
    }

    loadItems();
  }, []);

  const persist = useCallback(async (nextItems: ShoppingItem[]) => {
    setItems(nextItems);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(nextItems));
  }, []);

  const addItem = useCallback(
    async (title: string) => {
      const trimmed = title.trim();
      if (!trimmed) {
        return;
      }

      const nextItem: ShoppingItem = {
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        title: trimmed,
        checked: false,
        createdAt: Date.now()
      };

      await persist([nextItem, ...items]);
    },
    [items, persist]
  );

  const toggleItem = useCallback(
    async (id: string) => {
      const nextItems = items.map((item) =>
        item.id === id
          ? {
              ...item,
              checked: !item.checked
            }
          : item
      );
      await persist(nextItems);
    },
    [items, persist]
  );

  const removeItem = useCallback(
    async (id: string) => {
      const nextItems = items.filter((item) => item.id !== id);
      await persist(nextItems);
    },
    [items, persist]
  );

  const activeCount = useMemo(() => items.filter((item) => !item.checked).length, [items]);

  return {
    items,
    isLoading,
    activeCount,
    addItem,
    toggleItem,
    removeItem
  };
}
