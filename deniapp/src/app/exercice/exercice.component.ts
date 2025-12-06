import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {

post:Post = {
  title: 'Mon premier post',
  content: 'Ceci est le contenu de mon premier post.',
  loveIts: 0,
  creator : 'Denis'
}
showTitle:boolean = false;
showalert(){
  alert("Button clicked!");
}
changetitle(){
  this.post.title = "Title changed heloo salimmmmmmmmmmmm!";
}

username : string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
