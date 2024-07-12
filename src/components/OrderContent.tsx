import { OrderItem } from "../types";
import { formatCurrency } from "../helpers/index";

type OrderContentProps = {
  order: OrderItem[];
  removeOrder: (item: number) => void;
};
export default function OrderContent({
  order,
  removeOrder,
}: OrderContentProps) {
  return (
    <>
      <div>
        <h2 className="font-black text-4xl">Comanda</h2>

        <div className="space-y-3 mt-10">
          {order.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-t border-gray-400 py-5 last-of-type:border-b"
            >
              <div>
                <p className="text-lg">
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p className="font-black">
                  Cantidad: {item.quantity} -{" "}
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
              <button
                onClick={() => removeOrder(item.id)}
                className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
