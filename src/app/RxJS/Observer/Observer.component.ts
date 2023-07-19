import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-Observer',
  templateUrl: './Observer.component.html',
  styleUrls: ['./Observer.component.css']
})
export class ObserverComponent implements OnInit {

  constructor() { }

  getResults = (num : number) => {    
    return num % 2 == 0 ? new Error("Invalid numer!") : num;
  } 
  
  observable = new Observable(
    observer => {                               // Đây là 1 observer nó là 1 paramater.
      for (let i = 1; i<=10; i++) {
        observer.next(this.getResults(i));      // Next gửi 1 tập 3 giá trị lần lượt 1, 2, 3.
      }
      observer.complete(); 
      observer.error()  
    }
  );

  ngOnInit() {
    this.observable.subscribe({
      next: (value) => console.log(value),
      error: (err) => console.error(err),
      complete: () => console.log('Completed')
    });;
  }  
}
