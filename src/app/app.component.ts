import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*-------------------------Data binding-------------------------*/
  //One-way
  
  bool: boolean = true;
  turn() {this.bool=!this.bool;}

  fontSizePx = 20;
  
  size: number | string = this.fontSizePx;
  sizeChange = new EventEmitter<number>();
  
  dec() { this.resize(-1); }
  inc() { this.resize(+1); }
  
  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
    this.fontSizePx = this.size;
  }

  //Two-way
  something:string="";

  /*------------------Template Reference Variable-----------------*/

  callPhone(phone: string): void {
    this.something=phone;
  }
//ngForm
  submitMessage: string = 'Value input valid!';

  onSubmit(itemForm: { value: { name: any; email: any; }; }): void {
    console.log(itemForm.value.name);
    console.log(itemForm.value.email);
  }
}
