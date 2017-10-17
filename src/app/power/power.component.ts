import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  powerLevel: Number;
  power:Number;

  onSubmit() {
    console.log(this.powerLevel);
    this.power = this.powerLevel;
  }

}
