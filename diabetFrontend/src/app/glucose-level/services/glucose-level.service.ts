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
import { getToken } from 'src/app/utils/getCredentials';

@Injectable({
  providedIn: 'root',
})
export class GlucoseLevelService {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + getToken(),
    }),
  };

  getGlucoseLevelById(id: number): Observable<GlucoseLevel> {
    return this.http
    .get<GlucoseLevel>(
      `${API_URL}/${UrlParts.GLUCOSE_LEVEL_URL}/${id}`,
      this.httpOptions
    )
    .pipe(
      map((item: GlucoseLevel) => {
        item.timestamp = new Date(item.timestamp);
        return item;
      })
    );
  }

  getGlucoseLevels(): Observable<GlucoseLevel[]> {
    return this.http
    .get<GlucoseLevel[]>(
      `${API_URL}/${UrlParts.GLUCOSE_LEVEL_URL}/`,
      this.httpOptions
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
    return this.http.post(
      `${API_URL}/${UrlParts.GLUCOSE_LEVEL_URL}/`,
      data,
      this.httpOptions
    );
  }
}
