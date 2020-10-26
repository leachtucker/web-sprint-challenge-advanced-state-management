const initialState = {
    isLoading: false,
    smurfs: []
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCHING_SMURFS_START":
            return {
                ...state,
                isLoading: true
            }

        case "FETCHING_SMURFS_SUCCESS":
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false
            }

        case "FETCHING_SMURFS_FAILURE":
            return {
                ...state,
                isLoading: false
            }

        case "POST_SMURF_SUCCESS":
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload]
            }

        default:
            return state;
    }
}