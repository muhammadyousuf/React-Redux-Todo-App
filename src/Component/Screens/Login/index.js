import { connect } from 'react-redux';
import Login from './Login';


const mapStateToProp = (state) => {
    return {
        user: state
    }
}


export default connect(mapStateToProp)(Login)