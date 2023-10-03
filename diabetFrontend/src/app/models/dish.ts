export interface Dish {
  Id: string;
  name: string;
  carbohydrate_exchange: number;
  glycemic_index: number;
  unitName: string;
  description: string;
}

export interface DishPost {
  name: string;
  carbohydrate_exchange: number;
  glycemic_index: number;
  unitName: string;
  description: string;
}

export interface DishUnitType {
  value: string;
  label: string;
}
