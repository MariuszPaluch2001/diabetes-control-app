import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  InsulineDoze,
  InsulineDozePost,
  InsulineDozeType,
} from 'src/app/models/insuline-doze';
import { isLocalEnvironment } from 'src/app/utils/environmentType';
import { LOCAL_API_URL, PRODUCTION_API_URL } from 'src/app/utils/urlApi';

@Injectable({
  providedIn: 'root',
})
export class InsulineDozesService {
  constructor(private http: HttpClient) {}

  API_URL = isLocalEnvironment() ? LOCAL_API_URL : PRODUCTION_API_URL;

  getInsulineDozeById(id: number): Observable<InsulineDoze> {
    return this.http.get<InsulineDoze>(`${this.API_URL}/dozes/${id}`);
  }

  getInsulineDozes(): Observable<InsulineDoze[]> {
    return this.http.get<InsulineDoze[]>(`${this.API_URL}/dozes/`);
  }

  getInsulineTypes(): Observable<InsulineDozeType[]> {
    return this.http.get<InsulineDozeType[]>(
      `${this.API_URL}/dozes/type-choices`
    );
  }

  saveInsulineDoze(doze: InsulineDozePost): Observable<any> {
    return this.http.post<InsulineDozePost>(`${this.API_URL}/dozes/`, doze);
  }
}
