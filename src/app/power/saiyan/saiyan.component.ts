import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css']
})
export class SaiyanComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit() {
  }

  @Input() power: Number;
  updatedPower: Number;

  ngOnChanges() {
    if (this.power) {
      this.updatedPower = Number(this.power) * 10
    }   
  }
}
