import { MenuItemT, OrderItem } from "../types";

type MenuItemProps = {
  item: MenuItemT;
  addItem: (item: MenuItemT) => void;
};

export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <>
      <button onClick={() => addItem(item)} className="border-2 hover:bg-teal-200 border-teal-400 w-full p-3 flex justify-between">
        <p>{item.name}</p>
        <p className="font-black">{item.price}</p>
      </button>
    </>
  );
}
