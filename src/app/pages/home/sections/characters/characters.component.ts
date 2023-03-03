import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters:any[]= []

  ngOnInit(){
    this.getCharacters();
  }

  constructor(private apiSvc:ApiService) {}
  getCharacters() {

    this.apiSvc.getCharacters().subscribe((characters: any) => {
      this.characters = characters.data.results;
      console.log(this.characters);
    });
  }

}
