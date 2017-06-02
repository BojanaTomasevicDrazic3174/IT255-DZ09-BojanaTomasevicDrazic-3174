import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
rooms=[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
   this.dataService.fetchData().subscribe(
     (data) => this.rooms = data
   )

  }

}
