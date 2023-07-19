import { Component, OnInit } from '@angular/core';
import { of, map, filter } from 'rxjs';

@Component({
  selector: 'app-Operator',
  templateUrl: './Operator.component.html',
  styleUrls: ['./Operator.component.css']
})
export class OperatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // Creation Operator
    var observable = of(1, 2, 3);  
    observable.subscribe({
      next: observer => {
        console.log(observer)
      }
    });
  

    // Pipeable Operator
    var pipeableOperator1 = observable.pipe(map(x => x * 2)); 
    var pipeableOperator2 = observable.pipe(filter(x => x > 2));
    console.log(pipeableOperator1.subscribe({
      next: observer => {
        console.log(observer)
      }
    }));
    console.log(pipeableOperator2.subscribe({
      next: observer => {console.log(observer)}
    }));    

    // Piping
    var piping = observable.pipe(map(x => x * 2), filter(x => x > 2)); 
    console.log(pipeableOperator1.subscribe({
      next: observer => {
        console.log(observer)
      }
    }));

    
    
  }

 
      

}
