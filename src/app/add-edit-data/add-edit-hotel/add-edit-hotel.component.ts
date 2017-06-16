import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DataService} from '../../data.service';
import { Provider} from "@angular/core/src/di";
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-hotel',
  templateUrl: './add-edit-hotel.component.html',
  styleUrls: ['./add-edit-hotel.component.css'],
  providers:[DataService]
})
export class AddEditHotelComponent implements OnInit {
   public myForm: FormGroup;
   public submitted: boolean;
   public events: any[] = [];

zvezdice=[1,2,3,4,5];
daNE=[' ','DA','NE'];

  constructor(private _fb: FormBuilder,private dataService: DataService, private router: Router) { }

  ngOnInit() {
        this.myForm = this._fb.group({
            grad: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
            zvezdica: ['', [<any>Validators.required, <any>Validators.minLength(1)]],
            udaljenost: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
            parking: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
            restoran: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
            kontakt: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
       });
  }

  save(model: Hotel, isValid: boolean) {
      if (this.myForm.dirty && this.myForm.valid) {
        this.dataService.addHotel(model).subscribe(
          data => {if (data["_body"] == "ok") { this.router.navigate(['./']); } else {alert("Greska prilikom unosa novog hotela!!!") }
          }
        );

      }else{
        alert("Popunite sva polja!")
      }
    }

}

@Injectable()
export class Hotel {
    constructor(
        public grad: string,
        public zvezdica: number,
        public udaljenost: string,
        public parking: string,
        public restoran: string,
        public kontakt: string
    ){}
}
