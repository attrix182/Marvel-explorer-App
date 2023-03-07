import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { CategoryModel } from 'src/app/interfaces/category.model';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

constructor(private navbarService: NavbarService) { }

  searchWord:string = '';

  @Output() category = new EventEmitter<string>();
  selected: string = 'Characters';

  search(){
      this.navbarService.setSearchField(this.searchWord);
  }


  categories: CategoryModel[] = [
    {
      id: 1,
      name: 'Characters',
      icon: "background-image: url('http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg');"
    },
    {
      id: 2,
      name: 'Comics',
      icon: "background-image: url('http://i.annihil.us/u/prod/marvel/i/mg/9/b0/4c7d666c0e58a.jpg');"
    },
  ];

  selectCategory(category: string) {
    this.selected = category;
    this.category.emit(category);
  }

}
