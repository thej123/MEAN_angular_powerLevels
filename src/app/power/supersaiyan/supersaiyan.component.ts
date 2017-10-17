import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyan',
  templateUrl: './supersaiyan.component.html',
  styleUrls: ['./supersaiyan.component.css']
})
export class SupersaiyanComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit() {
  }


  @Input() power: Number;
  updatedPower: Number;  
  ngOnChanges() {
    if (this.power) {
      this.updatedPower = Number(this.power) * 90
    }   
  }
}
