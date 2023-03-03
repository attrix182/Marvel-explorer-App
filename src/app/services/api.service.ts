import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  urlMarvel = 'https://gateway.marvel.com:443/v1/public';
  hash = '1325099b480020bdf391ff967dee2706'
  publicKey = '0e8c06e33bf66ee4311dce1307637080'
  ts = '1'

  constructor(private http: HttpClient) {}

  getCharacters(){
    return this.http.get(`${this.urlMarvel}/characters?&ts=${this.ts}&apikey=${this.publicKey}&hash=${this.hash}`);
  }

  getCharacter(id: string){
    return this.http.get(`${this.urlMarvel}/characters/${id}?&ts=${this.ts}&apikey=${this.publicKey}&hash=${this.hash}`);
  }

  serachCharacters(keyWord:string){
    return this.http.get(`${this.urlMarvel}/characters?nameStartsWith=${keyWord}&ts=${this.ts}&apikey=${this.publicKey}&hash=${this.hash}`);
  }

  getComics(){
    return this.http.get(`${this.urlMarvel}/comics?&ts=${this.ts}&apikey=${this.publicKey}&hash=${this.hash}`);
  }

  getComic(id: string){
    return this.http.get(`${this.urlMarvel}/comics/${id}?&ts=${this.ts}&apikey=${this.publicKey}&hash=${this.hash}`);
  }

  getEvents(){
    return this.http.get(`${this.urlMarvel}/events?&ts=${this.ts}&apikey=${this.publicKey}&hash=${this.hash}`);
  }

  getEvent(id: string){
    return this.http.get(`${this.urlMarvel}/events/${id}?&ts=${this.ts}&apikey=${this.publicKey}&hash=${this.hash}`);
  }

  getSeries(){
    return this.http.get(`${this.urlMarvel}/series?&ts=${this.ts}&apikey=${this.publicKey}&hash=${this.hash}`);
  }

  getSerie(id: string){
    return this.http.get(`${this.urlMarvel}/series/${id}?&ts=${this.ts}&apikey=${this.publicKey}&hash=${this.hash}`);
  }

  getStories(){
    return this.http.get(`${this.urlMarvel}/stories?&ts=${this.ts}&apikey=${this.publicKey}&hash=${this.hash}`);
  }

  getStorie(id: string){
    return this.http.get(`${this.urlMarvel}/stories/${id}?&ts=${this.ts}&apikey=${this.publicKey}&hash=${this.hash}`);
  }

}
