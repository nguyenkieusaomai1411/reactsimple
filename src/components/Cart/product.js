import React, { Component } from 'react';

export default class Product extends Component {
    render() {
        return (
          <>
          <p>Đây là product {this.props.name}</p>
          </>
        );
      }
      
}