import { Action } from 'argparse';
import { comment } from 'postcss-selector-parser';
import { COMMENTS } from '../shared/comments.js';
import * as ActionTypes from './ActionTypes';

export const comments = (state = COMMENTS, action) =>{
    switch(action.type){
        case ActionTypes.ADD_COMMENT:
            const comments = action.payload;
            comment.id = state.length
            comment.date = new Date().toISOString();
            return state.concat(comment);
        default:
            return state;
    }
};