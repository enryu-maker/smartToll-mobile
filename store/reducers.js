const initialState = {
    access: null,
    vehicle: [],
    profile: {},
    wallet: {},
    tolls: []
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ACCESS':
            return {
                ...state,
                access: action.payload,
            };
        case 'SET_VEHICLE':
            return {
                ...state,
                vehicle: action.payload,
            };
        case 'SET_PROFILE':
            return {
                ...state,
                profile: action.payload,
            };
        case 'SET_WALLET':
            return {
                ...state,
                wallet: action.payload,
            };
        case 'SET_TOLLS':
            return {
                ...state,
                tolls: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                access: null,
            };
        default:
            return state;
    }
};

export default mainReducer;
