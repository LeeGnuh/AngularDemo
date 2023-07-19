import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, filter } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-Observable',
  templateUrl: './Observable.component.html',
  styleUrls: ['./Observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {

  subscription = new Subscription();

  // Đây là function subscribe(observer) copy từ observer component
  subscribe(observer : any) {   
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
      observer.error()
  }

  // Đây là dòng subscribe observer cho observable
  observable = new Observable(this.subscribe); 

  // Nhưng việc subscribe này hơi rườm rà có thể code gọn lại như bên dưới
  observable1 = new Observable(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
      observer.error()   
  });

  // Ngoài ra còn có thể code ở dạng thiếu như sau
  observable2 = new Observable(observer => {
      observer.next(1);
      observer.complete();
  });

  //Hay đơn giản hơn nữa
  observable3 = new Observable(observer => { observer.next(1); });



  constructor() { }

  ngOnInit() {
  
  this.observable.pipe(filter((x:any) => x <= 2)).subscribe({
    next: observer => console.log(observer),    
  })

  this.observable1.subscribe({
    next: observer => console.log(observer),
  })

  this.observable2.subscribe({
    next: observer => console.log(observer),  
  })

  this.observable3.subscribe({
    next: observer => console.log(observer),    
  })
  }

  ngOnDestroy() { } 

}
