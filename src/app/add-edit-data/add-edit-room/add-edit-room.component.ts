import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DataService} from '../../data.service';
import { Provider} from "@angular/core/src/di";
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-room',
  templateUrl: './add-edit-room.component.html',
  styleUrls: ['./add-edit-room.component.css']
})
export class AddEditRoomComponent implements OnInit {
  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];
  public soba: Soba;
  daNE=[' ','DA','NE'];
  idSoba: number;
  private sub: any;

  constructor(private _fb: FormBuilder,private dataService : DataService, private router: Router,private route: ActivatedRoute) {
  }

  ngOnInit() {
          // Ako nemamo na klijentu ceo objekat koji zelimo da prikazemo, vec samo id kao parametar u url onda se moze raditi na sledeci nacin, zakomentarisan deo
          //uzimanje parametra iz url-a - id kako bi ucitali objekat sa servera ili izfiltrirali iz liste objekata ako postoji
    // this.sub = this.route.params.subscribe(params => {
    //        this.idSoba = +params['id'];
    // });
           // nacin ako imamlo listu objekata na klijentu i zelimo da izfiltriramo samo onaj sa trazenim id-om
    // this.dataService.fetchData().subscribe(
    //   (data:Soba[]) =>  console.log(data.filter(x => x.id == this.idSoba))
    // );
           // ako zelimo da sa servera ucitamo zeljeni objekat  pomocu id-a
    // this.dataService.findSobaById(this.idSoba).subscribe(
    //     (data:Soba) =>  this.soba=data
    // );

    //deo za prikaz  ili izmenu objekta kada iz liste objekata(iz druge komponente) izabrani objekat prosledimo ovoj komponenti i taj objekat prikazemo i menjamo po zelji
    this.soba = this.dataService.getSoba();
    this.myForm = this._fb.group({
        id: [''],
        kvadrata: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
        kreveta: ['', [<any>Validators.required, <any>Validators.minLength(1)]],
        sprat: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
        terasa: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
        kuhinja: ['', [<any>Validators.required, <any>Validators.minLength(2)]]
   });
   if(this.soba!==undefined){
      this.myForm.setValue(this.soba)
   }

  }

  save(soba: Soba, isValid: boolean) {
    console.log(soba)
    if (this.myForm.dirty && this.myForm.valid) {
      this.dataService.addRoom(soba).subscribe(
        data => { if (data["_body"] == 'ok') { this.router.navigate(['./']); } else {alert("Greska prilikom unosa nove sobe!!!") }
        }
      );
    }else{
      alert("Popunite sva polja!")
    }
    }

}

@Injectable()
export class Soba {
    constructor(
        public id: number,
        public kvadrata: number,
        public kreveta: number,
        public sprat: number,
        public terasa: string,
        public kuhinja: string
    ){}
}
