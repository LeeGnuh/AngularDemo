import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-TestZoneJs',
  templateUrl: './TestZoneJs.component.html',
  styleUrls: ['./TestZoneJs.component.css']
})
export class TestZoneJsComponent implements OnInit {

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
  }

  counter = 0;

  increment() {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.counter++;
        console.log('Counter:', this.counter);
      },500);
    });
  }

}
