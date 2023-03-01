import { reducerCases } from "./Constants";

export const initalState = {
    token:null,
    playlists: [],
    userInfo: null,
    selectedPlaylistId: "2I1Ru7d7fhHagEsYMQgROd",
    selectedPlaylist: null,
    track: null,

};

const reducer = (state, action) => {
    switch(action.type) {
        case reducerCases.SET_TOKEN : {
            return {
                ...state,
                token:action.token
            }
        }
        case reducerCases.SET_PLAYLISTS : {
            return {
                ...state,
                playlists: action.playlists,

            }
        }
        case reducerCases.SET_USER : {
            return {
                ...state,
                userInfo: action.userInfo,
            }
        }
        case reducerCases.SET_PLAYLIST : {
            return {
                ...state,
                selectedPlaylist: action.selectedPlaylist,
            }
        }
        case reducerCases.SET_PLAYLIST_ID : {
            return {
                ...state,
                selectedPlaylistId: action.selectedPlaylistId,
            }
        }
        case reducerCases.SET_PLAYING:
            return {
                ...state,
                track: action.track,
            };

        default:
            return state;
    }
};

export default reducer;