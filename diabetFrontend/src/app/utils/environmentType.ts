import { isDevMode } from '@angular/core';

export function isLocalEnvironment() {
  return isDevMode();
}
