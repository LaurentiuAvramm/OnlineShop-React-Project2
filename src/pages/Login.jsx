import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css'
import { signInWithGoogle } from '../apis/firebase'
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/user';
import { useReducer } from 'react/cjs/react.production.min';


class Login extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.userData !== prevProps.user) {
            this.props.history.push('/');
        }
    }
    render() {
    return (
        <div className="login-page">
            <h1>Login</h1>
            <Link to='/'>Home</Link>
            <Link to='/register'>Register</Link>
            <button onClick={() => this.props.signInWithGoogle()}>Google SignIn</button>
        </div>
    )
}
}

const mapStateToProps = (state) => {
   
    return {
        user: state.user
    }

}


const mapDispatchToProps = (dispatch) => {
    return {
        signInWithGoogle: () => dispatch(loginUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);


