export type EachOrderType = {
  id: number;
  restaurant: string;
  totalPrice: number;
  totalItem: number;
  status: "Order Received" | "Preparing" | "Ready for Pickup" | "Delivered"
}

export type EachHistoryType = {
  id: number;
  restaurant: string;
  totalPrice: number;
  totalItem: number;
  date: string;
}