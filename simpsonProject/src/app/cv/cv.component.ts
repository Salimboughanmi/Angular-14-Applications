import { Component, OnInit } from '@angular/core';
import { Candidat } from '../Models/condidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  listCandidats=[
    new Candidat(1, "avatar", "Doe", 30, "Developer", "avatar.jpg"),
    new Candidat(2, "Bart", "simpson", 78, "technicien", "bart.jpg"),
    new Candidat(3, "Homer", "Doe", 45, "Developer", "homer.png"),
    new Candidat(4, "lisa", "simpson", 34, "Enseingnnat", "lisa.png"),
  ];

  selectedCandidat:Candidat ;

  constructor() { }

  ngOnInit(): void {
  }
  traitemetDuCv(cand : Candidat) {
    this.selectedCandidat = cand;
    console.log(this.selectedCandidat);
  }

}
