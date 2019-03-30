import React, { Component } from "react"
import { Redirect } from "react-router-dom";

class MiPerfil extends Component {
  
  componentDidMount () {
    console.log('MiPerfil Did Mount')
  }

  componentWillUnmount () {
    console.log('MiPerfil Will unMount')
  }
  
  render() {
    console.log('props', this.props)
    if ( ! this.props.loggedUser) {
      return <Redirect to="/login" />
    }
    return <>
      <h1>Mi perfil</h1>

      <h3>hola, {this.props.loggedUser.firstName}</h3>
    </>
  }
}

export default MiPerfil