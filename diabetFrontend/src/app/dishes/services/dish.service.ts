import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dish, DishPost, DishUnitType } from 'src/app/models/dish';
import { API_URL } from 'src/app/utils/urlApi';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor(private http: HttpClient) {}


  getDishById(id: number): Observable<Dish> {
    return this.http.get<Dish>(`${API_URL}/mealApp/dishes/${id}`);
  }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${API_URL}/mealApp/dishes/`);
  }

  saveDish(doze: DishPost): Observable<any> {
    return this.http.post<Dish>(`${API_URL}/mealApp/dishes/`, doze);
  }

  getDishUnits(): Observable<DishUnitType[]> {
    return this.http.get<DishUnitType[]>(`${API_URL}/mealApp/dishes/unit-names`);
  }
}
