import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal, MealPost } from 'src/app/models/meal';
import { isLocalEnvironment } from 'src/app/utils/environmentType';
import { LOCAL_API_URL, PRODUCTION_API_URL } from 'src/app/utils/urlApi';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  constructor(private http: HttpClient) {}

  API_URL = isLocalEnvironment() ? LOCAL_API_URL : PRODUCTION_API_URL;

  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(`${this.API_URL}/mealApp/meal/`);
  }

  getMealById(id: number): Observable<Meal> {
    return this.http.get<Meal>(`${this.API_URL}/mealApp/meal/${id}`);
  }

  saveMeal(meal: MealPost): Observable<any> {
    return this.http.post<MealPost>(`${this.API_URL}/mealApp/meal/`, meal);
  }
}
