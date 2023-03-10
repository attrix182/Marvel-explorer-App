import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CharacterCardComponent } from './pages/home/sections/characters/character-card/character-card.component';
import { CharactersComponent } from './pages/home/sections/characters/characters.component';
import { FormsModule } from '@angular/forms';
import { ComicsComponent } from './pages/home/sections/comics/comics.component';
import { ComicCardComponent } from './pages/home/sections/comics/comic-card/comic-card.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    CharacterCardComponent,
    CharactersComponent,
    ComicsComponent,
    ComicCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    NgxSkeletonLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
