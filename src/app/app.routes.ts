import {HomeComponent }         from "./home/home.component";
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';

export const appRoutes:Routes  = [
  {  path: '',  component: HomeComponent },
  {  path:'home', component: HomeComponent }

]
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
