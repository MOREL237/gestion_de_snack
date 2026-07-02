import { create } from "zustand";

export type CartItem = {
  productId: string;
  name: string;
  unitPrice: number;
  format: string;
  quantity: number;
};

type CartState = {
  tableId: string | null;
  posId: string | null;
  items: CartItem[];
  setContext: (tableId: string, posId: string) => void;
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clear: () => void;
  totalAmount: () => number;
  totalItems: () => number;
};

export const useCartStore = create<CartState>((set, get) => ({
  tableId: null,
  posId: null,
  items: [],

  setContext: (tableId, posId) => set({ tableId, posId }),

  addItem: (item, quantity = 1) => {
    const existing = get().items.find((i) => i.productId === item.productId);

    if (existing) {
      set({
        items: get().items.map((i) =>
          i.productId === item.productId
            ? { ...i, quantity: i.quantity + quantity }
            : i
        ),
      });
    } else {
      set({ items: [...get().items, { ...item, quantity }] });
    }
  },

  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(productId);
      return;
    }
    set({
      items: get().items.map((i) =>
        i.productId === productId ? { ...i, quantity } : i
      ),
    });
  },

  removeItem: (productId) =>
    set({ items: get().items.filter((i) => i.productId !== productId) }),

  clear: () => set({ items: [] }),

  totalAmount: () =>
    get().items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0),

  totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
}));