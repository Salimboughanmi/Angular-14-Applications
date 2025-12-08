import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrls: ['./ms-word.component.css']
})
export class MsWordComponent implements OnInit {

   bg;
   cl;
   sz;
   font;

  constructor() { }

  ngOnInit(): void {
  }
changesize(value){
  this.sz = `${value}px`;
}

}
