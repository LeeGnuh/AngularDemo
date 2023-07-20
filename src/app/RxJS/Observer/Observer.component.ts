import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-Observer',
  templateUrl: './Observer.component.html',
  styleUrls: ['./Observer.component.css']
})
export class ObserverComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    const observer = { // Đây là 1 function observer, function này sẽ được truyền vào observable.subscribe() để tạo ra một subscription
      next: (value:any) => console.log(value),
      error: (err:any) => console.error(err),
      complete: () => console.log('Completed')
    };
  }  
}
