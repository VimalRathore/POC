import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Blockchain } from './blockchain.model';
import { AppState } from './../app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {
  angForm: FormGroup;
  title: string;
  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ]
   });
  }

  addCoin(name, price) {
    this.store.dispatch({
      type: 'ADD_COIN',
      payload: {
        name,
        price
      } as Blockchain
    });
  }

  ngOnInit() {
    // tslint:disable-next-line:no-unused-expression
    this.title = 'Redux Store POC';
  }

}
