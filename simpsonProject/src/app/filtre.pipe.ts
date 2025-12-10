import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtre'
})
export class FiltrePipe implements PipeTransform {

  transform( value: any[], selStatut : string): any[] {
    if (selStatut.length==0 )
      return value;

    let newTab:any[]=[];
    for (const serv of value){
      if (serv['status']==selStatut){
       newTab.push(serv);
      }
    }
    return newTab;
  }

}
