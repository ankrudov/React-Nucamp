import { createStore, combineReducers } from 'redux';
import { comments } from './comments';
import { partners } from './partners';
import { campsites } from './campsites'
import { promotions } from './promotions';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites:campsites,
            comments:comments,
            partners:partners,
            promotions:promotions

        })
    );

    return store;
};