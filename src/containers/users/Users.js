import React, { Component } from 'react';
// import db from '../../api/db-user.json';
import User from "./index";
import axios from "axios";


class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            person: []
        };
    }

    componentDidMount = async () => {
        axios.get(`https://rickandmortyapi.com/api/character`)
            .then(res => {
                const characters = res.data.results;
                this.setState({ person: characters });
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.state.person.map(response => <User user={response} key={response.id} />)
                    }
                </div>
            </div>
        )
    }
}
export default Users;