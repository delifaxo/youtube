import React, { Component } from 'react'

export default class search extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">NoYouTube</a>
        <form className="form-inline" onSubmit={this.props.searchvideo}>
          <input className="form-control mr-sm-2" type="text" name="searchInput" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    )
  }
}