import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { LocalStorageControlService } from 'src/app/auth/services/local-storage-control.service';
import { Meal, MealPost } from 'src/app/models/meal';
import { API_URL } from 'src/app/utils/urlApi';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  constructor(
    private http: HttpClient,
    private storageService: LocalStorageControlService
  ) {}

  createHeader() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Token ' + this.storageService.getToken(),
      }),
    };
  }

  getMeals(): Observable<Meal[]> {
    const httpOptions = this.createHeader();
    return this.http.get<Meal[]>(`${API_URL}/mealApp/meal/`, httpOptions).pipe(
      map((items: Meal[]) => {
        items.forEach((item) => {
          item.timestamp = new Date(item.timestamp);
        });
        return items;
      })
    );
  }

  getMealById(id: number): Observable<Meal> {
    const httpOptions = this.createHeader();
    return this.http
    .get<Meal>(`${API_URL}/mealApp/meal/${id}`, httpOptions)
    .pipe(
      map((item: Meal) => {
        item.timestamp = new Date(item.timestamp);
        return item;
      })
    );
  }

  saveMeal(meal: MealPost): Observable<any> {
    const httpOptions = this.createHeader();
    return this.http.post<MealPost>(
      `${API_URL}/mealApp/meal/`,
      meal,
      httpOptions
    );
  }
}
