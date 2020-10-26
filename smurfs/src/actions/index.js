import axios from 'axios';

export const fetchSmurfs = () => (dispatch) => {
    dispatch({ type: 'FETCHING_SMURFS_START' });

    axios.get('http://localhost:3333/smurfs')
        .then(resp => {
            dispatch({ type: 'FETCHING_SMURFS_SUCCESS', payload: resp.data });
        })
        .catch(err => {
            dispatch({ type: 'FETCHING_SMURFS_FAILURE', payload: err.response.message });
        })
}

export const postSmurf = (smurf) => (dispatch) => {
    dispatch({ type: 'POST_SMURF_START' });

    axios.post('http://localhost:3333/smurfs', smurf)
        .then(resp => {
            dispatch({ type: 'POST_SMURF_SUCCESS', payload: smurf });
        })
        .catch(err => {
            dispatch({ type: 'POST_SMURF_FAILURE', payload: err.response.message });
        })
}