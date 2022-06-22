import { signInWithGoogle, signOut} from "../../apis/firebase";


const startLoading = () => {
    return {
        type: 'START_LOADING'
    }
}

const updateUserData = (payload) => {
    return {
        type: 'UPDATE_USER_DATA',
        payload: payload
    }
}

const updateError = (payload) => {
    return {
        type: 'UPDATE_ERROR',
        payload
    }
}


export function loginUser() {
    return (dispatch) => {
       
        dispatch(startLoading());

      
        signInWithGoogle().then(userData => {
            dispatch(updateUserData(userData.user));

        }).catch(error => {
            dispatch(updateError(error));
        });
    }
}



export function logoutUser() {
    return dispatch => {
        dispatch(startLoading());

        signOut().then(() => {
            dispatch(updateUserData(null));
        }).catch((error) => {
            dispatch(updateError(error));
        });
    }
}