import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routes';
import { CSSCarouselComponent } from './home/csscarousel/csscarousel.component';
import { SearchComponent } from './home/search/search.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CSSCarouselComponent,
    SearchComponent,
    FilterPipe
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
