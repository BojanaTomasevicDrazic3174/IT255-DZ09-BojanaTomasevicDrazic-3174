import { Component, OnInit } from '@angular/core';
import { CSSCarouselComponent } from './csscarousel/csscarousel.component';
import {DataService} from '../data.service';
import {Provider} from "@angular/core/src/di";
import {SearchComponent} from './search/search.component'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[DataService]
})
export class HomeComponent implements OnInit {

  name:String = "";
  korisnici: Object[];
  constructor(private dataService: DataService){

}
  ngOnInit() {
    this.dataService.fetchData();
  }

}
