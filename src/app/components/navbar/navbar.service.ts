import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  searchField: Subject<string> = new Subject<string>();

  constructor() { }

  setSearchField(searchField: string){
    this.searchField.next(searchField);
  }

  getSearchField(){
    return this.searchField as Observable<string>;
  }

}
