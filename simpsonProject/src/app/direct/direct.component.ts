import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css']
})
export class DirectComponent implements OnInit {
class3: boolean = true;
class2: boolean = false;
class1: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
switchClass(){
  if(this.class1)
    { this.class1=false;
      this.class2=true;
      this.class3=false;
    }
    else
      if(this.class2){
        this.class1=false;
        this.class2=false;
        this.class3=true;
    }
    else{
      this.class1=true;
      this.class2=false;
      this.class3=false;
    }

}
}
