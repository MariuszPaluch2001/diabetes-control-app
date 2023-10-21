import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { LocalStorageControlService } from 'src/app/auth/services/local-storage-control.service';
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

  getInsulineDozeById(id: number): Observable<InsulineDoze> {
    const httpOptions = this.createHeader();
    return this.http
    .get<InsulineDoze>(`${API_URL}/dozes/${id}`, httpOptions)
    .pipe(
      map((item: InsulineDoze) => {
        item.timestamp = new Date(item.timestamp);
        return item;
      })
    );
  }

  getInsulineDozes(): Observable<InsulineDoze[]> {
    const httpOptions = this.createHeader();
    return this.http.get<InsulineDoze[]>(`${API_URL}/dozes/`, httpOptions).pipe(
      map((items: InsulineDoze[]) => {
        items.forEach((item) => {
          item.timestamp = new Date(item.timestamp);
        });
        return items;
      })
    );
  }

  getInsulineTypes(): Observable<InsulineDozeType[]> {
    return this.http.get<InsulineDozeType[]>(`${API_URL}/dozes/type-choices`);
  }

  saveInsulineDoze(doze: InsulineDozePost): Observable<any> {
    const httpOptions = this.createHeader();
    return this.http.post<InsulineDozePost>(
      `${API_URL}/dozes/`,
      doze,
      httpOptions
    );
  }
}
