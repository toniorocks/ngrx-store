import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

const productSelector = (state: any) => state.productReducer;
const createProductSelector = (id:number, name:string) => ({ type: 'ADD_PRODUCT', payload: { id, name } });


@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ngrx-store';
  counter$: Observable<number> | null = null;
  newProduct: string = '';
  products$: Observable<any[]> | null = null;
  id: number = 0;
  constructor(private store: Store<any>) {
    console.info('AppComponent constructor');
    this.counter$ = store.select('counterReducer');
    this.products$ = this.store.select(productSelector);
    //console.info('counter$:', this.counter$);
  }
  ngOnInit(): void {
    console.info('AppComponent ngOnInit');
    //this.initializeProducts();
  }
  // private initializeProducts() {
  //   this.products$ = this.store.select(state => state.productReducer);
  // }

  addProduct() {
    if (this.newProduct.trim()) {
      this.store.dispatch(createProductSelector(this.id++, this.newProduct.trim()));
      console.info('Product added:', this.store.select(state => state.productReducer), this.products$);
      this.newProduct = '';
    }
  }
  removeProduct(product: {id:number, name:string}) {
    this.store.dispatch({ type: 'REMOVE_PRODUCT', payload: { name: product.name } });
  }
}
