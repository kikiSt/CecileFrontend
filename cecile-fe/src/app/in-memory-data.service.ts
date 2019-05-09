import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const users = [
      { id: 11, name: 'max' },
      { id: 12, name: 'mustermann' },
      { id: 13, name: 'anna' },
      { id: 14, name: 'musterfau' },
      { id: 15, name: 'test' },
      { id: 16, name: 'test1' },
      { id: 17, name: 'test2' },
      { id: 18, name: 'test3' },
      { id: 19, name: 'test4' },
      { id: 20, name: 'test5' }
    ];
    return{users};
  }
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}
