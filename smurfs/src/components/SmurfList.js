import React, { useEffect } from 'react';
import Smurf from './Smurf';

import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions/index';

const SmurfList = (props) => {
    useEffect(() => {
        props.fetchSmurfs();
    }, []);

    return (
        <>
            {
                props.smurfs.map(smurf => {
                    return <Smurf key={smurf.id} smurf={smurf}/>
                })
            }
        </>

    );

}

const mapStateToProps = (state) => {
    return {
      isLoading: state.isLoading,
      smurfs: state.smurfs
    }
}
  
export default connect(mapStateToProps, {fetchSmurfs})(SmurfList);
