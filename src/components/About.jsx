import React, { Component } from "react"

class About extends Component {
  
  componentDidMount () {
    console.log('About Did Mount')
  }

  componentWillUnmount () {
    console.log('About Will unMount')
  }
  
  render() {
    return <>About</>
  }
}

export default About