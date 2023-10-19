import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal, MealPost } from 'src/app/models/meal';
import { API_URL } from 'src/app/utils/urlApi';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  constructor(private http: HttpClient) {}

  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(`${API_URL}/mealApp/meal/`);
  }

  getMealById(id: number): Observable<Meal> {
    return this.http.get<Meal>(`${API_URL}/mealApp/meal/${id}`);
  }

  saveMeal(meal: MealPost): Observable<any> {
    return this.http.post<MealPost>(`${API_URL}/mealApp/meal/`, meal);
  }
}
