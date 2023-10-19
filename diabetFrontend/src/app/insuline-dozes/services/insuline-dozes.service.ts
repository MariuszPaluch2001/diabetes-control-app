import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  InsulineDoze,
  InsulineDozePost,
  InsulineDozeType,
} from 'src/app/models/insuline-doze';
import { API_URL } from 'src/app/utils/urlApi';

@Injectable({
  providedIn: 'root',
})
export class InsulineDozesService {
  constructor(private http: HttpClient) {}


  getInsulineDozeById(id: number): Observable<InsulineDoze> {
    return this.http.get<InsulineDoze>(`${API_URL}/dozes/${id}`).pipe(
      map((item: InsulineDoze) => {
        item.timestamp = new Date(item.timestamp);
        return item;
      })
    );
  }

  getInsulineDozes(): Observable<InsulineDoze[]> {
    return this.http.get<InsulineDoze[]>(`${API_URL}/dozes/`).pipe(
      map((items: InsulineDoze[]) => {
        items.forEach((item) => {
          item.timestamp = new Date(item.timestamp);
        });
        return items;
      })
    );
  }

  getInsulineTypes(): Observable<InsulineDozeType[]> {
    return this.http.get<InsulineDozeType[]>(
      `${API_URL}/dozes/type-choices`
    );
  }

  saveInsulineDoze(doze: InsulineDozePost): Observable<any> {
    return this.http.post<InsulineDozePost>(`${API_URL}/dozes/`, doze);
  }
}
