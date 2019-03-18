import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


class ADDTODO extends Component {
   
   
    componentDidMount(){
        console.log('user', this.props)
        
    }
    render() {
        return (
            <div >
               <Navbar />
            </div>
        );
    }
}




export default withRouter(ADDTODO) 