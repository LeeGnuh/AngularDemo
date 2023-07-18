import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-AsyncAwait',
  templateUrl: './AsyncAwait.component.html',
  styleUrls: ['./AsyncAwait.component.css']
})
export class AsyncAwaitComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  
  async onClick() { // async trả về một promise
    try {
      await this.http.get('http://localhost:3000/pokemon').subscribe(data => {console.log(data)});
      //await đợt cho tới khi promise hoàn thành thì trả lại giá trị
    } 
    catch (error) {
      console.error(error);
    }
  }

}
