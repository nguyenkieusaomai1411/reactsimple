import React, { Component } from 'react';
import Header from './header';
import Foooter from './footer';
import ListProduct from './listproduct';

export default class CartPage extends Component {
    render(){
        return(
            <>
            <Header></Header>
            <ListProduct></ListProduct>
            <Foooter></Foooter>
            </>
        );
    }
}