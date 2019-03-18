import { connect } from 'react-redux';
import Login from './Login';


const mapStateToProp = (state) => {
    console.log('UPADTED STATE', state);
    return {
        user: state
    }
}


export default connect(mapStateToProp)(Login)