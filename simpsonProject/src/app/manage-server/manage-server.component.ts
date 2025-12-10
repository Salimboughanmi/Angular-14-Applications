import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-server',
  templateUrl: './manage-server.component.html',
  styleUrls: ['./manage-server.component.css']
})
export class ManageServerComponent implements OnInit {



  listServers=[{
    nom : 'production server',
    type: 'small',
    status:'stable',
    date_d:new Date(2024,1,15)
  },
  {
    nom : 'development server',
    type: 'medium',
    status:'offline',
    date_d:new Date(2024,2,20)},
    {
    nom : 'testing server',
    type: 'large',
    status:'critical',
    date_d:new Date(2024,3,25),

    },
    {
    nom : 'backup server',
    type: 'small',
    status:'stable',
    date_d:new Date(2024,4,30)
    }

]
 SelectedStatus ="";
  constructor() { }

  ngOnInit(): void {
  }

   affecterClass(st){
    return{
       'list-group-item-success': st=='stable' ? true : false,
      'list-group-item-warning': st=='offline',
      'list-group-item-danger': st=='critical'

    }
   }
/*
    affecterClass(st){
    if(st=='stable'){
      return 'list-group-item-success'
    }
    else if(st=='offline'){
      return 'list-group-item-warning'
    }
    else if(st=='critical'){
      return 'list-group-item-danger'
    }
  return ''} */


 /*  myInput(inp){   methode 3
    this.SelectedStatus=inp;
  } */
}
