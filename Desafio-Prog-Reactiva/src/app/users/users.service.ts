import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';


export interface User {
  id: number;
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getCounter(): Observable<number> {
    return interval(1000);
  }
  getUsers(): Observable<User[]> {
    return new Observable((subscriber) => {
      subscriber.next([
        {
          id: 1,
          name: 'Rodolfo'
        },
        {
          id: 2,
          name: 'Marcia'
        },
        {
        id: 3,
        name: 'Samuel',
        }
      ])
    })

  }
}
