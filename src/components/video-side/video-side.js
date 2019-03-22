import React, { Component } from 'react'
import Videosidelist from '../video-side-list/v-s-l'
export default class Videoside extends Component {

  render() {
    const { bodySearch, onListPlay, idVideo } = this.props;

    return (
      <div className="allsidebar">
        <div className="insidesidebar card border-primary mb-3" >
          <Videosidelist
            bodySearch={bodySearch}
            onListPlay={onListPlay}
            idVideo={idVideo} />
        </div>
      </div>
    )
  }
}

