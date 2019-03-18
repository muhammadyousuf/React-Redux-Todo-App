import { connect } from 'react-redux';
import { addUser } from '../../../Redux/Actions/AuthAction';
import Signup from './Signup';

function mapStateToProp(state){
   console.log('UPADTED STATE',state);
    return {
       user : state.user
    }
}

const mapDispatchToProp = (dispatch) => {
    return{
        addUser: (user) => dispatch(addUser(user)) 
    }
 
}
export default connect(mapStateToProp, mapDispatchToProp)(Signup) 
