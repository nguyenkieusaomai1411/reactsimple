import React, { Component } from 'react';
import DanhDanh from './DanhDanh';


export default class People extends Component{
    constructor(props){
        super(props);
        this.state ={
            address:"dn",
        }
       
    }
     render() {
         this.state.address ="quang nanm";
         return (
             <div>
               <p>tên của tôi là {this.props.name}</p>
               
               tuổi  {this.props.age}

               diachi {this.state.address}
             </div>
         );
        
    }

}

People.defaultProps = {
    "name":"sao mai",
    "age":21
}