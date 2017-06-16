import {HomeComponent }         from "./home/home.component";
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { AddEditDataComponent } from './add-edit-data/add-edit-data.component'
import { AddEditRoomComponent } from './add-edit-data/add-edit-room/add-edit-room.component'
import { AddEditHotelComponent } from './add-edit-data/add-edit-hotel/add-edit-hotel.component'

export const appRoutes:Routes  = [
  {  path: '',  component: HomeComponent },
  {  path:'home', component: HomeComponent },
  {  path:'usluge/sobe-hoteli-admin', component: AddEditDataComponent },
  {  path:'usluge/sobe-hoteli-admin/add-room', component: AddEditRoomComponent },
  {  path:'usluge/sobe-hoteli-admin/add-hotel', component: AddEditHotelComponent }

]
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
