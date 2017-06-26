import { Component, OnInit,Injectable } from '@angular/core';
import {DataService} from '../data.service';
import {Soba} from './add-edit-room/add-edit-room.component'
import { Router, ActivatedRoute } from '@angular/router';
 import {Http} from '@angular/http';

@Component({
  selector: 'app-add-edit-data',
  templateUrl: './add-edit-data.component.html',
  styleUrls: ['./add-edit-data.component.css']
})
export class AddEditDataComponent implements OnInit {
  // liste soba i hotela na klijentu u json obliku radi  lakse demostracije
rooms=[{"id":"1","kreveta":"1","kvadrata":"25","kuhinja":"NE","terasa":"NE","sprat":"Prvi"},
      {"id":"2","kreveta":"2","kvadrata":"30","kuhinja":"DA","terasa":"NE","sprat":"Drugi"},
      {"id":"3","kreveta":"2","kvadrata":"30","kuhinja":"DA","terasa":"DA","sprat":"Prvi"},
      {"id":"4","kreveta":"4","kvadrata":"40","kuhinja":"DA","terasa":"DA","sprat":"Treci"},
      {"id":"5","kreveta":"1","kvadrata":"25","kuhinja":"NE","terasa":"NE","sprat":"Prvi"},
      {"id":"6","kreveta":"2","kvadrata":"30","kuhinja":"DA","terasa":"NE","sprat":"Drugi"},
      {"id":"7","kreveta":"2","kvadrata":"30","kuhinja":"DA","terasa":"DA","sprat":"Prvi"},
      {"id":"8","kreveta":"4","kvadrata":"40","kuhinja":"DA","terasa":"DA","sprat":"Treci"}];

hotels=[{
    "id":"1",
    "grad": "Beograd",
    "zvezdica": "5",
    "udaljenost": "500m",
    "parking": "DA",
    "restoran": "DA",
    "kontakt": "Nepoznat"
  }];

    constructor(private router: Router,private dataSer:DataService) {}

    public ngOnInit() {
      this.dataSer.postSoba(undefined);
      this.dataSer.postHotel(undefined);
    }

  izmeniSobu(soba: Soba){
    this.dataSer.postSoba(soba);
    this.router.navigate(['./usluge/sobe-hoteli-admin/add-edit-room/'+soba.id]);
  }
  obrisiSobu(soba){
    this.dataSer.deleteSoba(soba.id).subscribe(
      data => { alert(data)
      }
    );
  }
  izmeniHotel(hotel){
    this.dataSer.postHotel(hotel);
    this.router.navigate(['./usluge/sobe-hoteli-admin/add-edit-hotel/'+hotel.id]);
  }
  obrisiHotel(hotel){
    this.dataSer.deleteHotel(hotel.id).subscribe(
      data => { alert(data)
      }
    );
  }

}

@Injectable()
export class SobaSelectedService {
  constructor(private http:Http,router:Router)
  {
  }
    public sobaSelected;

    postSoba(){
      this.sobaSelected;
    }

}
