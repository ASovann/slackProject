import React from 'react';
import logo from './logo.svg';
//import 'bootstrap/dist/css/boostrap.min.css'
import { BrowserRouter, Route } from 'react-router-dom';
import Title from './components/Title';
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';
import NavBar from './components/NavBar';
import Login from'./components/Login';
import CreateUser from './components/CreateUser';

const Data =[
  {
    senderId: "Arthur",
    text: "aaaaa"
  },
  {
    senderId: "Jean",
    text: "bbbbb"
  }

]

// class App extends React.Component
// {
  
//   constructor()
//   {
//     super()
//     this.state = {
//       messages: Data
//     }
//   }
//   render()
//   {
//     return(
//       <div>
//           <Title/>
//           <MessageList messages={this.state.messages}/>
//           <MessageForm/>
//           <NavBar/>
//       </div>
//     );
//   } 
// }
const App = () => {
  return (
    // <div>
    //   <Title/>
      
    //   <MessageForm/>
    //   <NavBar/>
    // </div>
    <BrowserRouter>
      <Route exact path='/' component={CreateUser} />
      <Route exact path='/login'component={Login}/>
      <Route exact path='/messageForm' component={MessageForm}/>
    </BrowserRouter>
    
  )
}

export default App;