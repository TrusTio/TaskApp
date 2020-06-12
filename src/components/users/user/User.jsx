import React, {useEffect, useState} from 'react';
import { UserCard } from '../user-card/UserCard';
import { getUserById } from '../../../core/api/users.api';


export function User(props){

    const [user, setUser] = useState([]);

    useEffect(() => {
        console.log(props);
        getUserById(props.computedMatch.params.id).then((response) => {
            setUser(response.data)
        });
    });

    return (
        <div className="single-user">
            <UserCard user={user} />
        </div>
    )
}