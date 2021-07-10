import { actionTypes } from 'react-redux-form';
import { CAMPSITES } from '../shared/campsites';
import * as ActionTypes from './ActionTypes';


export const addComment = (campsiteId, rating, author, text)=>({
    type:ActionTypes.ADD_COMMENT,
    payload:{
        campsiteId:campsiteId,
        rating:rating,
        author:author,
        text:text
    }
})

export const fetchCampsites = () => dispatch => {

    dispatch(campsitesLoading());

    setTimeout(() => {
        dispatch(addCampsites(CAMPSITES));
    }, 2000);
};

export const campsitesLoading = () => ({
    type:actionTypes.CAMPSITES_LOADING
});

export const campsitesFailed = errMess => ({
    type:ActionTypes.CAMPSITES_FAILED,
    payload:errMess
});

export const addCampsites = campsites => ({
    type: ActionTypes.ADD_CAMPSITES,
    payload:campsites
});