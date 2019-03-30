import React, { Component } from "react"

class Contact extends Component {
  
  componentDidMount () {
    console.log('Contact Did Mount')
  }

  componentWillUnmount () {
    console.log('Contact Will unMount')
  }
  
  render() {
    return <>Contact</>
  }
}

export default Contact