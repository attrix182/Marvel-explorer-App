import { Component } from '@angular/core';
import { NavbarService } from 'src/app/components/navbar/navbar.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent {
  comics: any[] = [];
  loading: boolean = false;

  ngOnInit() {
    this.getComics();
    this.handleSearchValue();
  }

  constructor(private apiSvc: ApiService, private navSvc: NavbarService) {}

  handleSearchValue() {
    this.navSvc.searchField.subscribe((searchValue: string) => {
     // if(!searchValue) this.getCharacters();
   //   this.getCharacterByName(searchValue);
    });
  }



  getComics() {
    this.loading = true;
    this.apiSvc.getComics().subscribe((comics: any) => {
      this.comics = comics.data.results;
      console.log(this.comics);
    }).add(() => {
      this.loading = false;
    }
    );
  }
}
