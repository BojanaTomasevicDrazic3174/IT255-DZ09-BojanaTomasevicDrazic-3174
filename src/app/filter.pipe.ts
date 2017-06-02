import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(rooms: any, brojSoba: any,brojKvadrata: any): any {
    console.log(brojSoba,brojKvadrata)
    if((brojSoba===undefined && brojKvadrata === undefined)
        || (brojSoba===null && brojKvadrata === undefined)
        || (brojSoba===undefined && brojKvadrata === null)
        || (brojSoba===null && brojKvadrata === null)) return rooms;

    if(brojSoba===undefined || brojSoba===null) {
      return rooms.filter(function(room){
        return room.brojKvadrata.includes(brojKvadrata);
      })
    }
    if(brojKvadrata === undefined || brojKvadrata===null) {
      return rooms.filter(function(room){
        return room.brojKreveta.includes(brojSoba);
      })
    }
    return rooms.filter(function(room){
      return room.brojKreveta.includes(brojSoba) && room.brojKvadrata.includes(brojKvadrata);
    })
  }

}
