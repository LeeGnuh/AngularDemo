import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from 'src/app/models/Pokemon';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  
  @Input() detail!:Pokemon;
  @Output() remove: EventEmitter<any> = new EventEmitter();

  onRemove(){
    this.remove.emit(this.detail);
  }
}
