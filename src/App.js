import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from "./components/layout/Layout";
import Users from "./containers/users/Users";
import About from "./containers/about/about";
import Detail from "./containers/users/Detail";
import Form from "./containers/form/index";
import Login from "./containers/login/index.js";




class App extends Component {

  render() {
    return (

      <Router>
        <div className="App">
          <header className="App-header">
            <h3>CRM APP</h3>
          </header>
          <Layout >
            <Route path="/"></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/form" component={Form}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/users" component={Users}></Route>
            <Route path="/user/:id" component={Detail}></Route>
          </Layout>
        </div>
      </Router >

    );
  }
}

export default App;
