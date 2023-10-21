import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageControlService } from 'src/app/auth/services/local-storage-control.service';
import { Dish, DishPost, DishUnitType } from 'src/app/models/dish';
import { API_URL } from 'src/app/utils/urlApi';

@Injectable({
  providedIn: 'root',
})
export class DishService {
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

  getDishById(id: number): Observable<Dish> {
    const httpOptions = this.createHeader();
    return this.http.get<Dish>(`${API_URL}/mealApp/dishes/${id}`, httpOptions);
  }

  getDishes(): Observable<Dish[]> {
    const httpOptions = this.createHeader();
    return this.http.get<Dish[]>(`${API_URL}/mealApp/dishes/`, httpOptions);
  }

  saveDish(doze: DishPost): Observable<any> {
    const httpOptions = this.createHeader();
    return this.http.post<Dish>(
      `${API_URL}/mealApp/dishes/`,
      doze,
      httpOptions
    );
  }

  getDishUnits(): Observable<DishUnitType[]> {
    return this.http.get<DishUnitType[]>(
      `${API_URL}/mealApp/dishes/unit-names`
    );
  }
}
