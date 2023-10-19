import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Meal, MealPost } from 'src/app/models/meal';
import { API_URL } from 'src/app/utils/urlApi';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  constructor(private http: HttpClient) {}

  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(`${API_URL}/mealApp/meal/`).pipe(
      map((items: Meal[]) => {
        items.forEach((item) => {
          item.timestamp = new Date(item.timestamp);
        });
        return items;
      })
    );
  }

  getMealById(id: number): Observable<Meal> {
    return this.http.get<Meal>(`${API_URL}/mealApp/meal/${id}`).pipe(
      map((item: Meal) => {
        item.timestamp = new Date(item.timestamp);
        return item;
      })
    );
  }

  saveMeal(meal: MealPost): Observable<any> {
    return this.http.post<MealPost>(`${API_URL}/mealApp/meal/`, meal);
  }
}
