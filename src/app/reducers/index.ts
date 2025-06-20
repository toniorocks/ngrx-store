import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

export interface State {
  productReducer: Product[];
  counterReducer: number;
  // Add other reducers as needed
  // Example: isSidebarOpen: boolean;
  // isDarkMode: boolean;
  // isSidebarHovered: boolean;

}

const counterReducer = (state = 0, action: { type: string }) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

interface Product {
  id: number;
  name: string; // add other product properties as needed
  // add other product properties as needed
}

const productREducer = (state: Product[] = [], action: { type: string, payload?: any }) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.payload];
    case 'REMOVE_PRODUCT':
      return state.filter(product => product.name !== action.payload.name);
    default:
      return state;
  }
};

export const reducers: ActionReducerMap<State> = {
  // Define your reducers here
  // Example: 'counter': counterReducer
  counterReducer: counterReducer,
  productReducer: productREducer
};




export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
