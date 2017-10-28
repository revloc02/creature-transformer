import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Creature } from './creature';

@Injectable()
export class CreatureSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Creature[]> {
    return this.http
               .get(`api/creatures/?name=${term}`)
               .map(response => response.json().data as Creature[]);
  }
}