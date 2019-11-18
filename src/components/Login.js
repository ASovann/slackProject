import React, {Component} from 'react'
import {Redirect} from 'react-router-dom';

class Login extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: false
        }
        
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(element)
    {
        const inputName = element.target.name;
        const inputValue = element.target.value;

        const statusCopy = Object.assign({}, this.state);
        statusCopy[inputName] = inputValue;

        console.log(statusCopy);
        this.setState(statusCopy);
    }

    setRedirect = () =>
    {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () =>
    {
        if(this.state.redirect)
        {
            return <Redirect to = '/'/>
        }
    }  

    

    submit() {
        fetch("http://localhost:8000/login",
        {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(this.state),
        })
        .then(data => data.json())
        .then(res => console.log(res))
        .then(user => {
            // login successful if there's a user in the response
            if (user) {
                // store user details and basic auth credentials in local storage 
                // to keep user logged in between page refreshes
                user.authdata = window.btoa(this.state.username + ':' + this.state.password);
                localStorage.setItem('user', JSON.stringify(user));
            }
            //.catch(err => console.log(err)
        })   //)
        
    }

    

    render()
    {
        return(
            <div>
                {this.renderRedirect()}
                <div className="form-example">
                    <label htmlFor="username">Enter your name: </label>
                    <input value={this.state.username} onChange={this.handleChange} type="text" name="username" id="username"  required></input>
                </div>
                <div className="form-example">
                    <label htmlFor="password">Enter password </label>
                    <input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="password"  required/>
                </div>
                <div className="form-example">
                    <input type="submit" value="Login" onClick={this.submit}  />
                    
                </div>
            </div>
        )
    }
    
}

export default Login;