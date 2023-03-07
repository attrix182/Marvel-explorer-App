import { Component, EventEmitter, Output } from '@angular/core';
import { CategoryModel } from 'src/app/interfaces/category.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output() category = new EventEmitter<string>();
  selected: string = 'Characters';

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
