import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurf } from '../actions/index';

const initialFormValues = {
    name: "Papa Smurf",
    height: 5,
    age: 200
}

const SmurfForm = (props) => {
    const [formValues, setFormValues] = useState(initialFormValues);

    const onPost = (smurf) => {
        props.postSmurf(smurf);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        onPost({ name: formValues.name, height: formValues.height, age: formValues.age });
    }

    const onChange = evt => {
        setFormValues({...formValues, [evt.target.name]: evt.target.value});
    }

    return (
        <div className="box smurf-form">
            <h3 className="title is-5">Add a Smurf:</h3>
            <form onSubmit={onSubmit}>
                <div className="field">
                    <label>Name:</label>
                    <div className="control">
                        <input name="name" onChange={(evt) => {onChange(evt)}} value={formValues.name} className="input" type="text" placeholder="Papa Smurf" required />
                    </div>
                </div>
                <div className="field">
                    <label>Height (cm):</label>
                    <div className="control">
                        <input name="height" onChange={(evt) => {onChange(evt)}} value={formValues.height} className="input" type="number" placeholder="6cm" required />
                    </div>
                </div>
                <div className="field">
                    <label>Age:</label>
                    <div className="control">
                        <input name="age" onChange={(evt) => {onChange(evt)}} value={formValues.age} className="input" type="number" placeholder="188" required />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button className="button is-link">Add</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default connect(null, { postSmurf })(SmurfForm);