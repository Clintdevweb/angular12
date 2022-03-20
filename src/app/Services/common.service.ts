import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public counterService = 1;

  constructor() {}

  public Squared(n: number): number {
    return n * n
  }
}
