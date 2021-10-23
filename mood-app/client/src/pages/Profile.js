import React from 'react';

import { Redirect, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client';

import UserList from '../components/UserList';

import { QUERY_ME, QUERY_SINGLE_USER } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
    const { userId } = useParams();


    const { loading, data } = useQuery(
        userId ? QUERY_SINGLE_USER : QUERY_ME,
        {
            variables: { userId: userId }
        }
    );


    const user = data?.me || data?.user || {};

    if (Auth.loggedIn() && Auth.getProfile().data._id === userId) {
        return <Redirect to="/me" />
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if(!user?.name) {
        return (
            <h4>
                You need to be logged in to check your mood!
            </h4>
        );
    }

    return (
        <main>
            <div className="card bg-white card-rounded w-50">
                <div className="card-header bg-dark text-center">
                    <h1>
                        Hey {userId ? `${user.name}!` : ''} Here's How Your Day Went!
                    </h1>
                </div>
                <div className="card-body m-5">
                   {user.length > 0 && (
                       <UserList
                       mood={user.mood}
                       note={user.note}
                    />
                   )}
                </div>

            </div>
        </main>
    );
};

export default Profile
