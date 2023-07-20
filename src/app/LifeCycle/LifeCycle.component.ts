import { AfterContentInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-LifeCycle',
  templateUrl: './LifeCycle.component.html',
  styleUrls: ['./LifeCycle.component.css'],
  providers: [ PokemonService ]
})
export class LifeCycleComponent implements  OnChanges, OnInit, DoCheck, AfterContentInit {

  constructor(service : PokemonService) { console.log("constructor", service);}  // Injective Dependence
  
  //Những khởi tạo phục vụ test ngOnChange
  @Input() myInput!: string;                                  //Nhận dữ liệu từ app.component.ts thông qua biến myInput
  @Output() myInputChanged = new EventEmitter<string>();      //Trả dữ liệu cho app.component.ts thông qua EventEmitter myInputChanged

  changeValue(event : any) {                                  //Function xác nhận sự thay đổi giá trị thẻ <input> trong html
    this.myInput = event.target.value;                          ///Ghi nhận giá trị thay đổi
    this.myInputChanged.emit(this.myInput);                     ///Emit giá trị sau khi thay đổi cho app.component.ts
  }

  //ngOnChanges được gọi khi có @Input truyền vào biến, lưu ý là từ component khác truyền vào chứ không phải thay đổi đơn thuần như dòng 19
  ngOnChanges(changes: SimpleChanges): void {                 
    
    console.log("ngOnChanges");
    
    if (changes['myInput']) {                                 //Kiểm tra giá trị truyền vào 
      const prevValue = changes['myInput'].previousValue;     
      const currentValue = changes['myInput'].currentValue; 
      console.log(prevValue);
      console.log(currentValue);
    }
  }
    
  ngOnInit() {
    //Khai báo dữ liệu sau khi khởi tạo component
  }

  name : string = "Nguyễn Đỗ Thế An";
  type = "password"
  
  ngDoCheck(){                                                 //Bắt mọi events
    console.log("ngDoCheck");
    
    if (this.name === this.myInput) {
      console.log('Current value of name:', this.name);
      console.log("conrect name");
      this.type="text";  
    }  
    else this.type="password"
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit");
  }


}
