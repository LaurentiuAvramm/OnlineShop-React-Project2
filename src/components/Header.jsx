import React from 'react'
import {Link} from 'react-router-dom'
import logos from '../assets/images/logos.JPG';
import './Header.css';
import {ReactComponent as ShoppingCart} from '../assets/icons/shopping-cart.svg';
import { connect } from 'react-redux';
import {signOut} from '../apis/firebase'
import { logoutUser } from '../redux/actions/user';



function Header(props) {
    // console.log(props);
    // const { numberOfProducts, user, logout} = props;
    return (
        <div className="header d-flex justify-content-between align-items-center container bg-light">
           <Link to="/"> 
            <img src= {logos} alt="logo" />
           </Link>
           <div>

           { props.user
                        ? <p>Salut, {props.user.displayName}!</p>
                        : null
                    }
               {
                   props.user
                   ?  <div>
                       <p>{props.user.displayName}</p>
                       <button onClick={props.signOut()}> Delogare </button>
                       </div>
                   : <Link to="/login">Login </Link>
               }
            <Link to="/cart">
              <ShoppingCart className= "ml-2" />
            </Link>
          
           <p className='ml-1 mb-0'>{props.numberOfProducts}</p>
           </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        numberOfProducts: state.cart.products.length,
        // user: state.user.props.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
