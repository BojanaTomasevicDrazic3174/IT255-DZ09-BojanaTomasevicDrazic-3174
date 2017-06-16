import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routes';
import { CSSCarouselComponent } from './home/csscarousel/csscarousel.component';
import { SearchComponent } from './home/search/search.component';
import { FilterPipe } from './filter.pipe';
import { AddEditDataComponent } from './add-edit-data/add-edit-data.component';
import { AddEditRoomComponent } from './add-edit-data/add-edit-room/add-edit-room.component';
import { AddEditHotelComponent } from './add-edit-data/add-edit-hotel/add-edit-hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CSSCarouselComponent,
    SearchComponent,
    FilterPipe,
    AddEditDataComponent,
    AddEditRoomComponent,
    AddEditHotelComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
