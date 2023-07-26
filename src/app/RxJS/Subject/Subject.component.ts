import { Component, OnInit } from '@angular/core';
import { Observable, Subject, from, multicast } from 'rxjs';

@Component({
  selector: 'app-Subject',
  templateUrl: './Subject.component.html',
  styleUrls: ['./Subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor() { }


  obs = new Observable(subscriber => {                            //Khai báo Observable
    subscriber.next(1);
    subscriber.next(2);
  });
  obs1 = from([1, 2, 3]);
    

  subj = new Subject();                                           //Khai báo Subject
  subj1 = new Subject<number>()


  source = from([1, 2, 3]);
  subject = new Subject();
  multicasted = this.source.pipe(multicast(this.subject));
 
  
  ngOnInit() {

    this.obs.subscribe(res => {                                   //Observable phát đơn luồng, chỉ cho một Observer đăng kí -> Kết quả: 1 2 1 2
      console.log('obs-Observer a:', res);
    });
    this.obs.subscribe(res => {
      console.log('obs-Observer b:', res);
    });    
  

    // Dùng Object như 1 Observable
    this.subj.subscribe({                                         //Subject phát đa luồng cho nhiều Observer đăng kí -> Kết quả: 1 1 2 2
      next:res => { console.log('subj-Observer a:', res); }       
    });
    
    this.subj.subscribe({
      next:res => { console.log('subj-Observer b:', res); }
    });

    this.subj.next(1);
    this.subj.next(2);


    // Dùng Subject như 1 Observer
    this.subj1.subscribe({                                        
      next: (v) => console.log(`obs1-subj1-observerA: ${v}`),
    });
    this.subj1.subscribe({
      next: (v) => console.log(`obs1-subj1-observerB: ${v}`),
    });
     
    this.obs1.subscribe(this.subj1);
  }

}
