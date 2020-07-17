import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { createStore } from 'redux';
import userReducer from '../../reducers/user.js';

class User extends Component {


    render() {
        const store = createStore(userReducer);

        const { user } = this.props
        return (
            <div className="col-md-3">
                <div className="card mt-10">
                    <div className="card-body">
                        <img className="card-img-top" src={user.image} />
                        <h5 className="card-title">{user.name} </h5>
                        <p className="card-text">{user.status} </p>
                        <p className="card-text">{user.gender} </p>
                        <p className="card-text"> {user.species}</p>

                        <Link to={`user/${user.id}`}><p className="btn btn-primary">Detail</p></Link>

                    </div>
                </div>
            </div>
        )
    }

}
export default User;
