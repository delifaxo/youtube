import React, { Component } from 'react'

export default class search extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div>NoYouTube</div>
        <form className="form-inline my-lg-0" onSubmit={this.props.searchvideo}>
          <input className="form-control mr-sm-2" type="text" name="searchInput" placeholder="Search"/>
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    )
  }
}