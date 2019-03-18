import React, { Component } from 'react'

export default class search extends Component {





  render() {
    //onChange ->
       return (
        <nav className="searchbar navbar navbar-expand-lg navbar-dark bg-primary">
    NoYouTube
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto"></ul>
       
          <form className="form-inline my-2 my-lg-0" onSubmit={this.props.searchvideo}>
            <input className="form-control mr-sm-2" type="text" name="searchInput" placeholder="Search"/>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
  }
}
