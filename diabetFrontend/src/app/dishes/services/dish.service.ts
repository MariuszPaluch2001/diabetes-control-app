import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dish, DishPost, DishUnitType } from 'src/app/models/dish';
import { isLocalEnvironment } from 'src/app/utils/environmentType';
import { LOCAL_API_URL, PRODUCTION_API_URL } from 'src/app/utils/urlApi';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor(private http: HttpClient) {}

  API_URL = isLocalEnvironment() ? LOCAL_API_URL : PRODUCTION_API_URL;

  getDishById(id: number): Observable<Dish> {
    return this.http.get<Dish>(`${this.API_URL}/mealApp/dishes/${id}`);
  }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${this.API_URL}/mealApp/dishes/`);
  }

  saveDish(doze: DishPost): Observable<any> {
    return this.http.post<Dish>(`${this.API_URL}/mealApp/dishes/`, doze);
  }

  getDishUnits(): Observable<DishUnitType[]> {
    return this.http.get<DishUnitType[]>(`${this.API_URL}/mealApp/dishes/unit-names`);
  }
}
