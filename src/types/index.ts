export type MenuItemT = {
    id: number,
    name: string,
    price: number
}

export type OrderItem = MenuItemT & {
    quantity: number
}