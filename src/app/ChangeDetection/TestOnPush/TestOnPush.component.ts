import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-TestOnPush',
  templateUrl: './TestOnPush.component.html',
  styleUrls: ['./TestOnPush.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestOnPushComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() data: string[]= ["123"];

  addData(newData: string) {
    this.data.push(newData);
  }
}
