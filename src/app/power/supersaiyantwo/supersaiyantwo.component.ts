import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyantwo',
  templateUrl: './supersaiyantwo.component.html',
  styleUrls: ['./supersaiyantwo.component.css']
})
export class SupersaiyantwoComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit() {
  }


  @Input() power: Number;
  updatedPower: Number;
  
    ngOnChanges() {
      if (this.power) {
        this.updatedPower = Number(this.power) * 150
      }   
    }
}
