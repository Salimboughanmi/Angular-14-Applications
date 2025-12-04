import { Component, OnInit } from '@angular/core';
import { Condidat } from '../Models/condidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  listCandidats=[
    new Condidat(1, "avatar", "Doe", 30, "Developer", "avatar.jpg"),
    new Condidat(2, "Bart", "simpson", 78, "technicien", "bart.jpg"),
    new Condidat(3, "Homer", "Doe", 45, "Developer", "homer.png"),
    new Condidat(4, "lisa", "simpson", 34, "Enseingnnat", "lisa.pnh"),


  ];

  constructor() { }

  ngOnInit(): void {
  }

}
