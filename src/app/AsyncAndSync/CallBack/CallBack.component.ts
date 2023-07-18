import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-CallBack',
  templateUrl: './CallBack.component.html',
  styleUrls: ['./CallBack.component.css']
})
export class CallBackComponent implements OnInit {

  constructor(private http: HttpClient) { }
  
  ngOnInit() {
  }

  onClick(){    
    this.http.get('http://localhost:3000/pokemon') // Hàm get tạo ra 1 đối tượng observable (có thể quan sát được) ném ra giá trị
      .subscribe( // đăng kí để xem được giá trị từ observer
        data => { console.log(data); } // Call back
      );
  }
}
