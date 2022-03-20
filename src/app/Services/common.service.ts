import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public counterService = 1;

  constructor() {}

  public Squared(n: number): number {
    return n * n;
  }

  public submitData(data: any): void {
    console.log('data up server', data)
  }
}
