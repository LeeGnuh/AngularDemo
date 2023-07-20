import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],

})
export class DatabindingComponent {
  
  //One-way
  bool: boolean = true;

  turn() {this.bool=!this.bool;}
 
  @Input()  size!: number | string;
  @Output() sizeChange = new EventEmitter<number>();
  
  dec() { this.resize(-1); }
  inc() { this.resize(+1); }
  
  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
  
  //Two-way
  something:string="";

/*------------------Template Reference Variable-----------------*/

  callPhone(phoneNum: string): void {
    this.something=phoneNum;
  }

}
