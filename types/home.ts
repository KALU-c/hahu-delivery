export type FoodListType = {
  id: number;
  name: string;
  restaurant: string;
  price: number;
  rating: number;
  deliveryFee: number | string;
  cookTime: number | string;
  reviews?: reviews[];
}

type reviews = {
  id: number,
  review: string,
  date: string,
  reviewerName: string,
}