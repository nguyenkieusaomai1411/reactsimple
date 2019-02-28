import React, { Component } from 'react';
import Product from './product';

export default class ListProduct extends Component {
    render() {
        var productList = ["khen giay","ly"];
        return (
          <>
          {productList.map((e) =>
            <Product key={e} name={e}></Product>
          )}
            
          </>
        );
      }
      
}