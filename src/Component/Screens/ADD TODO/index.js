import ADDTODO from './ADDTODO';
import { connect } from 'react-redux';
import { addUser } from '../../../Redux/Actions/AuthAction';
const mapStateToProp = (state) => {
    console.log('UPADTED STATE', state);
    return {
        user: state
    }
}
const mapDispatchToProp = (dispatch) => {
    return{
        addUser: (user) => dispatch(addUser(user)) 
    }
 
}

export default connect(mapStateToProp,mapDispatchToProp)(ADDTODO) 