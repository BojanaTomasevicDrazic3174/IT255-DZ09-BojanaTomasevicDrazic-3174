import { Injectable } from '@angular/core';
import {Hotel} from './add-edit-data/add-edit-hotel/add-edit-hotel.component';
import {Soba} from './add-edit-data/add-edit-room/add-edit-room.component';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchData(){
    return this.http.get('http://localhost/phpTest/server2.php').map(
      (res) => res.json()
    )
  }

  addHotel(hotel: Hotel){
    console.log(hotel)
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://localhost/phpTest/server2.php?id=hotel', hotel, { headers: headers })
  }

  addRoom(soba: Soba){
    console.log(soba)
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://localhost/phpTest/server2.php?id=soba', soba, { headers: headers })
  }
}
