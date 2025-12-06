import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Candidat } from '../Models/condidat';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
@Input() tabCandidat = [];
@Output() msgToCv = new EventEmitter();


constructor() { }

  ngOnInit(): void {
  }
  traitementDuList(cand : Candidat){
   this.msgToCv.emit(cand);
  }

}
