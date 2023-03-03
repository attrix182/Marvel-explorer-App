import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  category = 'Characters';
  characters: any[] = [];


  constructor() {}


  ngOnInit() {
  }

  handleCategory(Event:any) {
    this.category = Event;
    console.log(this.category);
  }


}
