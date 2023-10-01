import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  GlucoseLevel,
  GlucoseLevelPost,
  GlucoseLevelType,
} from 'src/app/models/glucose-level';
import { isLocalEnvironment } from 'src/app/utils/environmentType';
import { LOCAL_API_URL, PRODUCTION_API_URL } from 'src/app/utils/urlApi';
import { UrlParts } from './enums/url-parts';

@Injectable({
  providedIn: 'root',
})
export class GlucoseLevelService {
  constructor(private http: HttpClient) {}

  API_URL = isLocalEnvironment() ? LOCAL_API_URL : PRODUCTION_API_URL;

  getGlucoseLevelById(id: number): Observable<GlucoseLevel> {
    return this.http.get<GlucoseLevel>(
      `${this.API_URL}/${UrlParts.GLUCOSE_LEVEL_URL}/${id}`
    );
  }

  getGlucoseLevels(): Observable<GlucoseLevel[]> {
    return this.http.get<GlucoseLevel[]>(
      `${this.API_URL}/${UrlParts.GLUCOSE_LEVEL_URL}/`
    );
  }

  getGlucoseLevelTypes(): Observable<GlucoseLevelType[]> {
    return this.http.get<GlucoseLevelType[]>(
      `${this.API_URL}/${UrlParts.GLUCOSE_LEVEL_URL}/${UrlParts.UNIT_CHOICES_URL}`
    );
  }

  saveGlucoseLevel(data: GlucoseLevelPost): Observable<any> {
    return this.http.post(
      `${this.API_URL}/${UrlParts.GLUCOSE_LEVEL_URL}/`,
      data
    );
  }
}
