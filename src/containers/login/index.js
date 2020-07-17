import React, { Component } from 'react';
import LoginReducer from '../../reducers/login';


class Login extends Component {

    render() {
        return (
            <div>
                <div className="container">
                     <form>
                         <div className="form-group">
                         <input type="text" className="form-control"  placeholder="Username" ></input>
                         </div>
                         <div className="form-group">
                         <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" ></input>
                         </div>
                         <button type="submit" className="btn btn-primary">Submit</button>
                     </form>
                </div>
            </div>
        )
    }
}
export default Login;