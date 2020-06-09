import React, {Component, useEffect, useState} from 'react';
import { UserCard } from '../user-card/UserCard';
import { getUserById } from '../../../core/api/users.api';
/*
export class User  extends Component {

    constructor(props) {
        super(props);

        this.state =  {
            user: {}
        };
    }

    componentDidMount() {
        console.log(this.props);
        getUserById(this.props.match.params.id).then((response) => {
            this.setState({
                user: response.data
            });
        });
    }

    render() {
        return (
            <div className="single-user">
                <UserCard user={this.state.user} />
            </div>
        )
    }
}
*/
export function User(props){

    const [user, setUser] = useState([]);

    useEffect(() => {
        console.log(props);
        getUserById(props.match.params.id).then((response) => {
          /*  setState({
                user: response.data
            }); */
            setUser(response.data)
        });
    });

    return (
        <div className="single-user">
            <UserCard user={user} />
        </div>
    )
}