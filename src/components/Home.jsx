import React, { Component } from "react"

class Home extends Component {
  
  componentDidMount () {
    console.log('Home Did Mount')
  }

  componentWillUnmount () {
    console.log('Home Will unMount')
  }
  
  render() {
    return <>Home</>
  }
}

export default Home