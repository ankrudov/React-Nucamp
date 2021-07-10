import { createStore, combineReducers, applyMiddleware  } from 'redux';
import { createForms} from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Comments } from './comments';
import { Partners } from './partners';
import { Campsites } from './campsites'
import { Promotions } from './promotions';
import {initialFeedback} from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites:Campsites,
            comments:Comments,
            partners:Partners,
            promotions:Promotions,
            ...createForms({
                feedbackForm:initialFeedback
            })

        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};