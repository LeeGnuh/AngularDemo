import { Component, OnInit } from '@angular/core';
import { of, map, filter, pipe } from 'rxjs';

@Component({
  selector: 'app-Operator',
  templateUrl: './Operator.component.html',
  styleUrls: ['./Operator.component.css']
})
export class OperatorComponent implements OnInit {

  constructor() { }

 
  ngOnInit() {

    // Creation Operator
    var observable = of(1, 2, 3);                                       //1 2 3

    // Pipeable Operator
    var pipeableOperator1 = observable.pipe(map(x => x * 2));           //2 4 6
    var pipeableOperator2 = observable.pipe(filter(x => x > 2));        //3

    // Piping
    var piping = observable.pipe(map(x => x * 2), filter(x => x > 2));  //4 6

    // Custom operator
      // With pipe()
    const discardOddDoubleEven = () => {
      return pipe(
        filter((x : any) => !(x % 2)),
        map((x) => x + x)
      );
    }
    var customO = observable.pipe(discardOddDoubleEven());              //2 2 6
      
      // From scratch
        // ...
  }

 
    

}
