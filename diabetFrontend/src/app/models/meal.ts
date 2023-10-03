export interface Meal {
  Id: string;
  timestamp: Date;
  quantity: number;
  description: string;
  dish: number;
  dish_name: string;
}

export interface MealPost {
  timestamp: Date;
  quantity: number;
  description: string;
  dish: Number;
}
