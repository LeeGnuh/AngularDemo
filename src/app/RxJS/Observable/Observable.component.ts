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

  constructor() { }

  ngOnInit() {

    // Đây là function subscribe, function này sẽ được khai báo trong khởi tạo của Observable
    const subscriber = (subscriber: any) => {   
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.complete();
      subscriber.error()
    }

    // Đây là dòng inject subscriber cho observable
    const observable = new Observable(subscriber); 

    // Nhưng việc inject như trên hơi rườm rà có thể code gọn lại như bên dưới
    const observable1 = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.complete();
      subscriber.error()   
    });

    // Ngoài ra còn có thể code ở dạng gọn hơn như sau
    const observable2 = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.complete();
    });

    //Hay đơn giản hơn nữa
    const observable3 = new Observable(subscriber => { 
      subscriber.next(1); 
    });
  }

  ngOnDestroy() { } 

}
