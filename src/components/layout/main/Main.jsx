import React from 'react';
import { Switch } from 'react-router-dom';
import { UsersList } from '../../users/users-list/UsersList';
import { User } from '../../users/user/User';
import { AuthenticatedRoute } from '../../../core/guards/AuthenticatedRoute';
import { UserEdit } from '../../users/user-edit/UserEdit';
import { TaskEdit } from '../../../tasks/task-edit/TaskEdit';
import { TasksList } from '../../../tasks/task-list/TasksList';
export function Main({ count }) {

    return (
        <div className="main-content">
            <Switch>
                <AuthenticatedRoute exact path="/users" component={UsersList} />
                <AuthenticatedRoute exact path="/users/create" admin={true} component={UserEdit}/>
                <AuthenticatedRoute exact path="/users/edit/:id" admin={true} component={UserEdit} />
                <AuthenticatedRoute exact path="/users/:id" component={User} />

                <AuthenticatedRoute exact path="/tasks" component={TasksList}/>
                <AuthenticatedRoute exact path="/tasks/create" component={TaskEdit}/>
                <AuthenticatedRoute exact path="/tasks/edit/:id" component={TaskEdit}/>
            </Switch>
        </div>
    );
}
