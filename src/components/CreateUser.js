import React, { Component } from 'react';


class CreateUser extends Component
{
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
          
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
    
    submit() {
        fetch("http://localhost:8000/users",
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(this.state),
        })
        .then(data => data.json())
            /*.catch(err => console.log(err))*/
        .then(res => console.log(res))

    }

    render()
    {


        return(
            <div >
                <div className="form-example">
                    <label htmlFor="username">Enter your name: </label>
                    <input name="username" id="username" value={this.state.username} onChange={this.handleChange} required></input>
                </div>
                <div className="form-example">
                    <label htmlFor="password">Enter password </label>
                    <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange} required/>
                </div>
                <div className="form-example">
                    <input type="submit" value="Create" onClick={this.submit}/>
                </div>
            </div>
        )
    }
   
}

export default CreateUser;