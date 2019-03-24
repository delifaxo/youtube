import React, { Component } from 'react'

export default class Videosidelist extends Component {
  render() {
    const { bodySearch, onListPlay, idVideo, OnNextVideo, OnPrevVideo } = this.props;
    const { items } = bodySearch;

    if (bodySearch === "test") {
      return (
        <div className="comments">Начните поиск видео</div>
      )
    }
    else {
      return (
        <div >
          {items.map(({ id, snippet }) => {
//            if (id.videoId === idVideo.slice(24)) { }
 //           else {
              return (<div key={`${id.videoId}`} onClick={onListPlay} name={`${id.videoId}`} className="card-video alert text-white bg-primary mb-3">
                <img className="video-side-img" name={`${id.videoId}`} src={`https://i.ytimg.com/vi/${id.videoId}/mqdefault.jpg`}></img>
                <div className="text-side-bar" name={`${id.videoId}`}>{snippet.title}</div>
              </div>)
            }
//          }
          )}
          <div>
            <button className="btnleft btn btn-primary" onClick={OnPrevVideo}>Prev video</button>
            <button className="btnright btn btn-primary" onClick={OnNextVideo}>Next video</button>
          </div>
        </div>
      )
    }
  }
}