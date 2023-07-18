import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-Promise',
  templateUrl: './Promise.component.html',
  styleUrls: ['./Promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor(private http: HttpClient) {  }

  ngOnInit() {
  }
 
  getData(): Observable<any> {
    return this.http.get('http://localhost:3000/pokemon') // Observable
  }

  onClick() { // Đây là 1 promise
    this.getData().subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    });
  }
}
