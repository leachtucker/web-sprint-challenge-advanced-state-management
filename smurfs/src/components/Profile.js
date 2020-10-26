import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';


const Profile = (props) => {
    let match = useRouteMatch();

    const { id } = match.params;
    const smurfIds = props.smurfs.map(smrf => {
        return smrf.id;
    });

    const smurf = props.smurfs[smurfIds.indexOf(parseInt(id))];

    return (
        <div className="container white">
            <h3 className="title is-4">{smurf.name}</h3>
            <p>Height: {smurf.height}</p>
            <p>Age: {smurf.age}</p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps, {})(Profile);