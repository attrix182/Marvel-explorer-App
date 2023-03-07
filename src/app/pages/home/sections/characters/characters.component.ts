import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/components/navbar/navbar.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: any[] = [];
  loading: boolean = false;

  ngOnInit() {
    this.getCharacters();
    this.handleSearchValue();
  }

  constructor(private apiSvc: ApiService, private navSvc: NavbarService) {}

  handleSearchValue() {
    this.navSvc.searchField.subscribe((searchValue: string) => {
      if(!searchValue) this.getCharacters();
      this.getCharacterByName(searchValue);
    });
  }

  getCharacterByName(searchValue: string) {
    this.loading = true;
    this.apiSvc
      .serachCharacters(searchValue)
      .subscribe((characters: any) => {
        this.characters = characters.data.results;
        console.log(this.characters);
      })
      .add(() => {
        this.loading = false;
      });
  }

  getCharacters() {
    this.loading = true;
    this.apiSvc.getCharacters().subscribe((characters: any) => {
      this.characters = characters.data.results;
      console.log(this.characters);
    }).add(() => {
      this.loading = false;
    }
    );
  }
}
