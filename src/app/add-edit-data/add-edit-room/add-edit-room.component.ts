import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DataService} from '../../data.service';
import { Provider} from "@angular/core/src/di";
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-room',
  templateUrl: './add-edit-room.component.html',
  styleUrls: ['./add-edit-room.component.css'],
  providers:[DataService]
})
export class AddEditRoomComponent implements OnInit {
  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];

  daNE=[' ','DA','NE'];

  constructor(private _fb: FormBuilder,private dataService : DataService, private router: Router) { }

  ngOnInit() {
    this.myForm = this._fb.group({
        kvadrata: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
        kreveta: ['', [<any>Validators.required, <any>Validators.minLength(1)]],
        sprat: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
        terasa: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
        kuhinja: ['', [<any>Validators.required, <any>Validators.minLength(2)]]
   });
  }

  save(soba: Soba, isValid: boolean) {
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
        public kvadrata: number,
        public kreveta: number,
        public sprat: number,
        public terasa: string,
        public kuhinja: string
    ){}
}
