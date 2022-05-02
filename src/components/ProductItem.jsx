import React from 'react';
import './ProductItem.css';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cart';


function ProductItem(props) { 
    const {id, name, price, currency, image, addToCartInjected} = props;

    return (
        <div className='col-4 flex-column align-items-center'>
            <img src={image} alt="product" className='w-100'/>
            <p>{name}</p>
            <p>{price + currency}</p>
            <button 
            className='btn btn-outline-dark'
            onClick={ () => {
                props.addToCartInjected({
                    product: {
                        name,
                        price,
                        currency,
                        image
                    }
                })
            }}
            >
            Adauga in cos

            </button>
           
        </div>
    )
}

function mapDispatchToProps(dispatch) {
        return {
            addToCartInjected: (payload) => dispatch(addToCart(payload))
        }
}

export default connect(null, mapDispatchToProps) (ProductItem);
