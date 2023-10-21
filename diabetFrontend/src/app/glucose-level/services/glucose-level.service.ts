import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  GlucoseLevel,
  GlucoseLevelPost,
  GlucoseLevelType,
} from 'src/app/models/glucose-level';
import { API_URL } from 'src/app/utils/urlApi';
import { UrlParts } from './enums/url-parts';
import { LocalStorageControlService } from 'src/app/auth/services/local-storage-control.service';

@Injectable({
  providedIn: 'root',
})
export class GlucoseLevelService {
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

  getGlucoseLevelById(id: number): Observable<GlucoseLevel> {
    const httpOptions = this.createHeader();
    return this.http
    .get<GlucoseLevel>(
      `${API_URL}/${UrlParts.GLUCOSE_LEVEL_URL}/${id}`,
      httpOptions
    )
    .pipe(
      map((item: GlucoseLevel) => {
        item.timestamp = new Date(item.timestamp);
        return item;
      })
    );
  }

  getGlucoseLevels(): Observable<GlucoseLevel[]> {
    const httpOptions = this.createHeader();
    return this.http
    .get<GlucoseLevel[]>(
      `${API_URL}/${UrlParts.GLUCOSE_LEVEL_URL}/`,
      httpOptions
    )
    .pipe(
      map((items: GlucoseLevel[]) => {
        items.forEach((item) => {
          item.timestamp = new Date(item.timestamp);
        });
        return items;
      })
    );
  }

  getGlucoseLevelTypes(): Observable<GlucoseLevelType[]> {
    return this.http.get<GlucoseLevelType[]>(
      `${API_URL}/${UrlParts.GLUCOSE_LEVEL_URL}/${UrlParts.UNIT_CHOICES_URL}`
    );
  }

  saveGlucoseLevel(data: GlucoseLevelPost): Observable<any> {
    const httpOptions = this.createHeader();
    return this.http.post(
      `${API_URL}/${UrlParts.GLUCOSE_LEVEL_URL}/`,
      data,
      httpOptions
    );
  }
}
