import React, { Component } from 'react';
import axios from "axios";


class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            person: {}

        };
    }

    componentWillMount() {
        axios.get(`https://rickandmortyapi.com/api/character/${this.props.match.params.id}`)
            .then(res => {
                const data = res.data;
                this.setState({ person: data });
            })
    }

    render() {
        const { person: { name, image, status, gender, species } } = this.state;

        return (
            <div className="container">
                <div className="card mt-10">
                    <div className="">
                        <img className="card-img-top" src={image} />
                        <h5 className="card-title">{name} </h5>
                        <p className="card-text">{status} </p>
                        <p className="card-text">{gender} </p>
                        <p className="card-text"> {species}</p>
                    </div>
                </div>
            </div>

        )
    }
}
export default Detail;
