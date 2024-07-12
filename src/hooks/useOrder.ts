import { useState } from "react";
import { MenuItemT, OrderItem } from "../types";

export function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);
  const addItem = (item: MenuItemT) => {
    const orderExist = order.find((orderItem) => orderItem.id === item.id);
    if (orderExist) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updatedOrder);
    } else {
      const newItem: OrderItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeOrder = (id: MenuItemT['id']) => {
    setOrder(order.filter(item => item.id !== id))
  }

  const placeOrder = () => {
    setOrder([])
    setTip(0)
  }

  return {
    order,
    tip,
    setTip,
    removeOrder,
    addItem,
    placeOrder
  };
}
