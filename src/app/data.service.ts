import { Injectable } from '@angular/core';
import {Hotel} from './add-edit-data/add-edit-hotel/add-edit-hotel.component';
import {Soba} from './add-edit-data/add-edit-room/add-edit-room.component';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private soba:Soba;
  private hotel:Hotel;

  constructor(private http: Http) {
     }

  fetchData(){
    return this.http.get('http://localhost/phpTest/server2.php').map(
      (res) => res.json()
    )
  }

  addHotel(hotel: Hotel){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://localhost/phpTest/server2.php?id=hotel', hotel, { headers: headers })
  }

  addRoom(soba: Soba){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://localhost/phpTest/server2.php?id=soba', soba, { headers: headers })
  }

deleteSoba(id){
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  return this.http.delete('http://localhost/phpTest/server2.php?deleteSoba='+id, { headers: headers })
}
deleteHotel(id){
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  return this.http.delete('http://localhost/phpTest/server2.php?deleteHotel='+id, { headers: headers })
}
findSobaById(id_soba){
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  return this.http.get('http://localhost/phpTest/server2.php?getSoba='+id_soba, { headers: headers }).map(
    (res) => res.json()
  )
}

// get i set metode za hotel i sobu
postSoba(soba){
 this.soba=soba;
}
getSoba(){
  return this.soba;
}
postHotel(hotel){
 this.hotel=hotel;
}
getHotel(){
  return this.hotel;
}

}
