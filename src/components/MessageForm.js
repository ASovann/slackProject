import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import { ButtonToolbar, Button, Navbar } from 'react-bootstrap'
class MessageForm extends Component
{
    constructor(props) {
        super(props)
        this.state = {
          message:''
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
        fetch("http://localhost:8000/messages/1",
        {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(this.state),
        })
        .then(data => alert("message envoyé")
        .catch(err => console.log(err))
        )
    }
    render(){
    return(
        <div>
            <Navbar fixed="bottom">
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label htmlFor='message'>Enter a text</Form.Label>
                    {/* <Form.Control
                        as="textarea"
                        rows="3"
                        
                        /> */}
                    </Form.Group>
                    <input value={this.state.message}
                        onChange={this.handleChange}
                        name='message'
                        id='message'></input>
                    
            </Form>
            
            <ButtonToolbar >
                <Button type="submit" value="Submit" onClick={this.submit}>Submit</Button>
            </ButtonToolbar>
            </Navbar>
        </div>

    )
    }
}

export default MessageForm;