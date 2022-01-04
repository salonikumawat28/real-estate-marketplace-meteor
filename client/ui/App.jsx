import React from 'react';
import { getUser } from '../db/users';
import { Home } from './Home';
import { Login } from './Login';
import { useTracker } from 'meteor/react-meteor-data';
import { Header } from './Header';

export const App = () => {

    const user = useTracker(() => getUser());
    return (
        <div>
            <Header/>
            {user ? (<Home/>) : (<Login/>)}
        </div>

    );
}
