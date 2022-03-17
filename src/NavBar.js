import React from 'react'
import {getHeaders} from './utils'


class NavBar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username: null
    };
    this.getUsername = this.getUsername.bind(this);
    this.getUsername();
  }

  getUsername() {
    fetch("/api/profile/", {
      method: "GET",
      headers: getHeaders()
    })
    .then(response => response.json())
    .then(data =>{
      this.setState({
        username: data.username
      })
    })
  }

  render () {
    return (
      <nav className="main-nav">
          <h1>{this.props.title}</h1>
          <a href="/api">API Docs</a>
          <p>{this.state.username}</p>
          <a href="/logout">Logout</a>
      </nav>
    )
  }
}

export default NavBar;
