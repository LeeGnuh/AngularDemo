import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  //ngForm
  submitMessage: string = 'Value input valid!';

  @Output() sendForm = new EventEmitter<{ value: { name: any; email: any; }; }>();

  onSubmit(itemForm: { value: { name: any; email: any; }; }): void {
    this.sendForm.emit(itemForm);
  }

  //ngIf, ngTemplate
  text : string = "";
  content(event:any):void {
    this.text = event.target.value;
  }

  //ngFor
  pokemons: Pokemon[] = [
    { id: 1,  name: 'pikachu'    , type: 'electric', favorite: true  },
    { id: 2,  name: 'hitokage'   , type: 'fire'    , favorite: false },
    { id: 3,  name: 'fushigidane', type: 'grass'   , favorite: false },
    { id: 4,  name: 'zenigame'   , type: 'water'   , favorite: true  }
  ]

  
}

interface Pokemon{
  id: number,
  name: string,
  type: string,
  favorite: boolean
}
