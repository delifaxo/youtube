import React, { Component } from 'react'
import Videosidelist from '../video-side-list/v-s-l'
export default class Videoside extends Component {

  render() {
    const { bodySearch, onListPlay, idVideo, OnNextVideo, OnPrevVideo } = this.props;

    return (
      <div>
        <Videosidelist
          OnPrevVideo={OnPrevVideo}
          OnNextVideo={OnNextVideo}
          bodySearch={bodySearch}
          onListPlay={onListPlay}
          idVideo={idVideo} />
      </div>
    )
  }
}

