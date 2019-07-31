import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export interface Test {
 firstname: string;
 getName(): string;
}
export class AppComponent implements Test {
  constructor() {
    // tslint:disable-next-line:no-inferrable-types
    // let abc: boolean = true;
    // this._http.get('https://api.myjson.com/bins/7xq2x1').subscribe(() => {
    //   console.log('Http Call is success from compoennt');
    // }, (error) => {
    //   console.log('Http Call is failed from component');
    // });
    this.test();
    // this.firstname = 'binod';
  }
  firstname: string;
  // tslint:disable-next-line:member-ordering
  name = 'Angular 5';

  abc = false;
  getName(): string {
    console.log('implementing interface');
    return 'abc';
  }
  test() {
    for ( let i = 0 ; i < 5 ; i++ ) {
      // console.log(i);
   }
  //  console.log(i);

    for ( let j = 0; j < 5; j++) {
    console.log(j);
 }
}
}
