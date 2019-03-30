import React, { Component } from "react"
import { Redirect } from "react-router-dom";

class Register extends Component {

  constructor (props) {
    super(props)
    this.state = {
      userText: '',
      passwordText: '',
      cPasswordText: '',
      firstNameText: ''
    }
  }
  updateUserText = (e) => {
    console.log(e.target.value)
    this.setState({
      userText: e.target.value
    })
  }
   
  updatePasswordText = (e) => {
    console.log(e.target.value)
    this.setState({
      passwordText: e.target.value
    })
  } 
  updateCPasswordText = (e) => {
    console.log(e.target.value)
    this.setState({
      cPasswordText: e.target.value
    })
  } 
  updateFirstNameText = (e) => {
    console.log(e.target.value)
    this.setState({
      firstNameText: e.target.value
    })
  } 

  handleButtonClick = () => {
    this.props.onRegister(
      this.state.userText,
      this.state.passwordText,
      this.state.cPasswordText,
      this.state.firstNameText
    )
  }
  
  render() {
    return <>
      <h1>Register</h1>
      <div>
        <label htmlFor="">User</label>
        <input type="text" onChange={this.updateUserText}/>
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input type="password" onChange={this.updatePasswordText}/>
      </div>
      <div>
        <label htmlFor="">Confirm Password</label>
        <input type="password" onChange={this.updateCPasswordText}/>
      </div>
      <div>
        <label htmlFor="">FirstName</label>
        <input type="password" onChange={this.updateFirstNameText}/>
      </div>
      <div><button onClick={this.handleButtonClick}>Register</button></div>
    </>
  }
}

export default Register