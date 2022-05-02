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

// export function loginUser() {
//     return (dispatch) => {
//         dispatch(startLoading());
//         signInWithGoogle().then((response) => {
//             const payload = response.user;
//            dispatch(updateUserData())
//         }).catch((error) => {
//             dispatch(updateError(error))
//         })


//     }
// }

export function loginUser() {
    return (dispatch) => {
        // Actiunea loginUser va fi actiunea dispatch-uita din pagina de login. Ea are de facut request-uri asincrone,
        // asadar va trebui sa dispatch-uiasca la randul ei 3 actiuni catre store. Prima este startLoading,
        // care va face reducerul sa seteze cheia loading a starii pe true.
        dispatch(startLoading());

        // Functia signInWithGoogle intoarce un Promise in caz de succes, asadar abia in .then vom stii ca datele au
        // venit cu succes. Odata ce avem datele despre user, facem dispatch la actiunea updateUserData.
        signInWithGoogle().then(userData => {
            dispatch(updateUserData(userData.user));
        // In cazul in care apare o eroare, trebuie sa salvam mesajul de eroare corespunzator, asadar vom face
        // dispatch la o noua actiune: updateUserError.
        }).catch(error => {
            dispatch(updateError(error));
        });
    }
}

// export function logoutUser() {
//     return (dispatch) => {
//         dispatch(startLoading())
//         signOut().then(() => {
//             dispatch(updateUserData(null))

//         }).catch((error) => {
//             dispatch(updateError(error))
//         })
// }
// }

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