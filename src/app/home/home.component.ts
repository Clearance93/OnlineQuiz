import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  pic1: string = "assets/images/images (1).jpg";


  constructor() { }

  ngOnInit(): void {
  }

}
