import React from 'react'

class AppContainer extends React.Component {
  render(){
    return (
      <div>
        <h1>Redux Template App Component</h1>
        {this.props.children}
      </div>
    )
  }
}

export default AppContainer
