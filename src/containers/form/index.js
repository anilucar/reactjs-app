import React, { Component } from 'react';
import FormReducer from '../../reducers/form';


class Form extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          fields: {},
          errors: {}
        }
      }
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
    
        //Name
        if(!fields["name"]){
          formIsValid = false;
          errors["name"] = "Cannot be empty";
        }
    
        if(typeof fields["name"] !== "undefined"){
          if(!fields["name"].match(/^[a-zA-Z]+$/)){
            formIsValid = false;
            errors["name"] = "Only letters";
          }      	
        }
    
        //Email
        if(!fields["email"]){
          formIsValid = false;
          errors["email"] = "Cannot be empty";
        }
    
         //Phone
        if(!fields["phone"]){
                formIsValid = false;
                errors["phone"] = "Cannot be empty";
        }
              
        if(typeof fields["phone"] !== "undefined"){
            if(!fields["phone"].match(/^[0-9]+$/)){
                formIsValid = false;
                errors["phone"] = "Only number";
            }      	
         }
        this.setState({errors: errors});
        return formIsValid;

      }
      
      contactSubmit(e){
        e.preventDefault();
        if(this.handleValidation()){
          alert("Form submitted");
        }else{
          alert("Form has errors.")
        }
      }

      handleChange(field, e){    		
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
      }
    render() {
        return (
            <div>
                <div className="container">
                     <form onSubmit= {this.contactSubmit.bind(this)}>
                         <div className="form-group">
                         <input type="text" className="form-control"  placeholder="Name Surname" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}></input>
                         <span className="text-danger">{this.state.errors["name"]}</span>
                         </div>
                         <div className="form-group">
                         <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}></input>
                         <span className="text-danger">{this.state.errors["email"]}</span>
                         </div>
                         <div className="form-group">
                         <input type="text" className="form-control" placeholder="Phone Number"  onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]}></input>
                         <span className="text-danger">{this.state.errors["phone"]}</span>
                         </div>
                         <button type="submit" className="btn btn-primary">Submit</button>
                     </form>
                </div>
            </div>
        )
    }
}
export default Form;