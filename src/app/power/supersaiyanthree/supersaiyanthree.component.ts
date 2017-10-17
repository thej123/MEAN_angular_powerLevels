import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyanthree',
  templateUrl: './supersaiyanthree.component.html',
  styleUrls: ['./supersaiyanthree.component.css']
})
export class SupersaiyanthreeComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit() {
  }

  @Input() power: Number;
  updatedPower: Number;
  
    ngOnChanges() {
      if (this.power) {
        this.updatedPower = Number(this.power) * 250
      }   
    }
}
