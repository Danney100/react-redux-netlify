import {Map, List} from 'immutable'

export const initialState = {
  user: Map({
    token: '',
    refresh: '',
    tabActive: null,
    fullName: '',
  }),
  process: Map({
    isLoading: false,
    portal: 1,
  }),
  order: Map({
    isSearching: false,
    orders: List(),
    orderToDisplay: null,
    orderDetails: Map(),
    inProgressOrder: Map(),
    transaction: Map(),
  }),
  cart: Map({
    cartID: -1,
    itemCount: 0,
    items: List(),
    cartDetails: Map(),
    user: Map(),
    address: Map(),
    addresses: List(),
    cartType: null,
  }),
  products: Map({
    productList: List(),
    productToDisplay: '',
    productDetails: Map(),
  }),
  consultant: Map({
    consultantToDisplay: null,
    consultantDetails: Map(),
  }),
  customer: Map({
    customerToDisplay: null,
    customerDetails: Map(),
  }),
  compensation: Map({
    runs: List([]),
  }),
  productConfiguration: Map({
    productType: Map(),
    joinOption: Map(),
    productClassification: Map(),
    displayCategory: Map(),
  }),
}
