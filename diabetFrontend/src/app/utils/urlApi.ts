import { isDevMode } from '@angular/core';

const LOCAL_API_URL = 'http://127.0.0.1:8000';

const PRODUCTION_API_URL = 'http://13.53.183.15';

export const API_URL = isDevMode() ? LOCAL_API_URL : PRODUCTION_API_URL;
