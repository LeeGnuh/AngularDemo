import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-Subscription',
  templateUrl: './Subscription.component.html',
  styleUrls: ['./Subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    //Create function
    const getResults = (num : number) => {    
      return !(num % 4) ? new Error("Invalid numer!") : num;
    } 


    const observable = new Observable( //Observable
      subscriber => { //Subscriber function             
        for (let i = 1; i<=10; i++) {
          subscriber.next(getResults(i));
        }
        subscriber.complete(); 
        subscriber.error()  
      }
    );
    
    const observer = { // Đây là 1 function observer
      next: (value:any) => console.log(value),
      error: (err:any) => console.error(err),
      complete: () => console.log('Completed')
    };

    const subscription = observable.subscribe(observer); // observer đăng kí observable

    // Ta có thể viết gọn lại như sau
    const subscription1 = observable.subscribe({ 
      next: (value:any) => console.log(value),
      error: (err:any) => console.error(err),
      complete: () => console.log('Completed')
    });

  }

}
