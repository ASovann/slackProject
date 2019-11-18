import React from 'react'
import ListeGroup from 'react-bootstrap/ListGroup'
import {Toast, ToastBody, ToastHeader} from 'react-bootstrap'
class MessageList extends React.Component
{
    
    
    render()
    {
        return(
            <ListeGroup>
                {this.props.messages.map(message=>
                    {
                        return (
                            //<ListeGroup.Item key={message.id}>
                              //<div>
                                //{message.senderId}
                              //</div>
                              //<div>
                                //{message.text}
                              //</div>
                            //</ListeGroup.Item>
                            <div>
                                <Toast key={message.id}>
                                    <ToastHeader >
                                        {message.senderId}
                                    </ToastHeader>
                                    <ToastBody>
                                        {message.text}
                                    </ToastBody>
                            </Toast>
                          </div>
                        )
                    })}
            </ListeGroup>
        )
    }
}

export default MessageList;