import React, { Component } from 'react';

import {Switch, Route, Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import MiPerfil from "./components/MiPerfil";
import Perfil from './components/Perfil';
import Register from './components/Register';

import logo from './logo.svg';


import './App.css';
import Logout from './components/Logout';

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      users: [
        {
          user: 'user1',
          password: '111111',
          firstName: 'User 1'
        },
        {
          user: 'user2',
          password: '222222',
          firstName: 'User 2'
        },
        {
          user: 'user3',
          password: '333333',
          firstName: 'User 3'
        },
      ],
      loggedUser: null
    }
  }

  logout = () => {
    toast(`Adios, ${this.state.loggedUser.user}` )
    this.setState({
      loggedUser: null
    })
  }

  login = (user, password) => {
    let dataUser = this.state.users.find(u => {
      return u.user === user
    })
    console.log(dataUser)
    if (dataUser) {
      
      if (password === dataUser.password) {

        toast.success(`Login Exitoso para ${dataUser.user}`)
        this.setState({
          loggedUser: {
            user: dataUser.user,
            firstName: dataUser.firstName
          }
        })
        
      } else {

        toast.error('Password incorrecto')

      }

    } else {
      toast.error("No está registado Usuario")
    }
  }

  register = (user, password, cPassword, firstName) => {
    console.log('user', user)
    console.log('password', password)
    console.log('cPassword', cPassword)
    console.log('firstName', firstName)
    
    if (password !== cPassword) {
      toast.error('Los passwords no coinciden')
    } else {
      let newUser = {
        user,
        password,
        firstName
      }
      this.setState({
        users: [...this.state.users, newUser]
      })
      toast.success(`Registro correcto del usuario ${user}`)
    }
  }

  constructPosts (arr) {
    return arr.map(post => {
      return <div className="post">
        <div><img src={post.image} alt=""/></div>
        <div><h2>post.title</h2><button>Compartir</button></div>
      </div>
    })
  } 

  loginWithProps = () => {
    return <Login onLogin={this.login} loggedUser={this.state.loggedUser} />
  }

  render() {
    return (
      <>
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <header>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/about">About</Link>&nbsp;
          <Link to="/contact">Contact</Link>&nbsp;
          {
            ! this.state.loggedUser 
            ?
              <Link to="/login">Login</Link>
            :
            <Link to="/logout">Logout</Link>
          }&nbsp;
          <Link to="/mi-perfil">Mi Perfil</Link>&nbsp;
          <Link to="/register">Registro</Link>&nbsp;
        </header>
        {/* <Login onLogin={this.login} /> */}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/login" render={this.loginWithProps}/>
          <Route exact path="/logout" render={() => {
            return (
              <Logout 
                loggedUser={this.state.loggedUser} 
                onLogout={this.logout}
              />
            )
          }}/>
          <Route exact path="/perfil/:id" component={Perfil}/>
          <Route exact path="/mi-perfil" render={() => {
            return <MiPerfil loggedUser={this.state.loggedUser}/>
          }}/>
          <Route exact path="/register" render={() => {
            return <Register onRegister={this.register}/>
          }}/>
          {/* /perfil/1  o /perfil/2 */}
        </Switch>
      </>
    )
  }
}

export default App;
