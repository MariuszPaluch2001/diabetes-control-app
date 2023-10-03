import { Dish } from './dish';

export interface Meal {
  Id: string;
  timestamp: Date;
  quantity: number;
  description: string;
  dish: Dish;
}

export interface MealPost {
  timestamp: Date;
  quantity: number;
  description: string;
  dish: Dish;
}

