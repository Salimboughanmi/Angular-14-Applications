import { Component, Input, OnInit } from '@angular/core';
import { Candidat } from '../Models/condidat';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
@Input() selectedCandidat : Candidat;

  constructor() { }

  ngOnInit(): void {
  }

}
