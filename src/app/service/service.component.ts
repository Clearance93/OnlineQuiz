import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {


  pic1: string = "assets/images/morden technology.png";
  pic2: string = "assets/images/tech cars.jpg";
  pic3: string = "assets/images/tech tree.png";

  constructor() { }

  ngOnInit(): void {
  }

}
