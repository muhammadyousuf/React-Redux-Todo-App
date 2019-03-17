import React, { Component } from 'react';
import { connect } from 'react-redux';


class Dashboard extends Component {
   
   
    componentDidMount(){
        console.log('user', this.props)
        
    }
    render() {
        return (
            <div >
               
            </div>
        );
    }
}
const mapStateToProp = (state) => {
    console.log('UPADTED STATE', state);
    return {
        user: state
    }
}



export default connect(mapStateToProp)(Dashboard) 