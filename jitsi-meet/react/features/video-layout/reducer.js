// @flow

import { ReducerRegistry } from '../base/redux';

import {
    SCREEN_SHARE_REMOTE_PARTICIPANTS_UPDATED,
    SET_TILE_VIEW
} from './actionTypes';
import { PersistenceRegistry } from '../base/storage';
const DEFAULT_STATE = {
    remoteScreenShares: [],

    /**
     * The indicator which determines whether the video layout should display
     * video thumbnails in a tiled layout.
     *
     * Note: undefined means that the user hasn't requested anything in particular yet, so
     * we use our auto switching rules.
     *
     * @public
     * @type {boolean}
     */
    tileViewEnabled: undefined
};

const STORE_NAME = 'features/video-layout';
PersistenceRegistry.register(STORE_NAME, { //added
    tileViewEnabled: false
});

ReducerRegistry.register(STORE_NAME, (state = DEFAULT_STATE, action) => {
    switch (action.type) {
    case SCREEN_SHARE_REMOTE_PARTICIPANTS_UPDATED: {
        return {
            ...state,
            remoteScreenShares: action.participantIds
        };
    }

    case SET_TILE_VIEW:
        return {
            ...state,
            tileViewEnabled: action.enabled 

        };
    }

    return state;
});
