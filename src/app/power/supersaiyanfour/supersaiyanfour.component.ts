import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyanfour',
  templateUrl: './supersaiyanfour.component.html',
  styleUrls: ['./supersaiyanfour.component.css']
})
export class SupersaiyanfourComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit() {
  }

  @Input() power: Number;
  updatedPower: Number;
  
    ngOnChanges() {
      if (this.power) {
        this.updatedPower = Number(this.power) * 500
      }   
    }
}
