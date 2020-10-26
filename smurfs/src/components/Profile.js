import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';


const Profile = (props) => {
    let match = useRouteMatch();

    console.log(props.smurfs, match);
    const { id } = match.params;
    const smurfIds = props.smurfs.map(smrf => {
        return smrf.id;
    });
    const smurf = props.smurfs[smurfIds.indexOf(parseInt(id))];

    console.log(smurf);

    useEffect(() => {

    }, []);

    console.log(match);

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