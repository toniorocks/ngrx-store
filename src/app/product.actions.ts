import { Action } from '@ngrx/store';
import { Product } from './product';

export enum ProductActionTypes {
  ADD_PRODUCT = '[Product] Add Product',
  UPDATE_PRODUCT = '[Product] Update Product',
  REMOVE_PRODUCT = '[Product] Remove Product',
  GET_PRODUCTS = '[Product] Get Products'
}

export class AddProductAction implements Action {
  type!: ProductActionTypes.ADD_PRODUCT;
  constructor(public payload: Product) {}
}
export class UpdateProductAction implements Action {
  type!: ProductActionTypes.UPDATE_PRODUCT;
  constructor(public payload: Product) {}
}
export class RemoveProductAction implements Action {
  type!: ProductActionTypes.REMOVE_PRODUCT;
  constructor(public payload: Product) {}
}
export class GetProductsAction implements Action {
  type!: ProductActionTypes.GET_PRODUCTS;
}

export type ProductActions =
  | AddProductAction
  | UpdateProductAction
  | RemoveProductAction
  | GetProductsAction;
