import React from 'react';
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';

const Home = () => {
    return (
        <div>
            <div className="container">
                <h1 className="title is-3 heading">The Village:</h1>
                <SmurfList />
            </div>
            <div className="container">
                <SmurfForm />
            </div>
        </div>
    );
}

export default Home;