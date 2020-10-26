import React, { useEffect } from 'react';
import Smurf from './Smurf';

import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions/index';
import { Link } from 'react-router-dom';


const SmurfList = (props) => {
    useEffect(() => {
        props.fetchSmurfs();
    }, []);

    return (
        <>
            {
                props.smurfs.map(smurf => {
                    return <Link key={smurf.id} to={`profile/${smurf.id}`}><Smurf key={smurf.id} smurf={smurf} /></Link>
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
