export function addToCart(payload) {
    return {
        type: 'ADD_TO_CART',
        payload: payload
    }

}

function removeFromCart(payload) {
    return {
        type: 'REMOVE_FROM_CART',
        payload: payload
    }
}