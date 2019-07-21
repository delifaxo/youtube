import React, { Component } from 'react';
import './test.css';
import Search from './components/search/search';
import Video from './components/video/video';
import Videoside from './components/video-side/video-side';
import Comments from './components/comments/comments';

const Api2_key = "AIzaSyCN8Z0e1u_dSFhNen05muGFYIzh-gsezQU";
//const Api2_key = "AIzaSyBe9qwivOtTfitthysxQY7gqYIp1BDCiuc";
const urlYoutube = "//www.youtube.com/embed/";
// test//
class App extends Component {
  constructor() {
    super();
    this.state = {
      id: "test",
      title: "",
      comments: [],
      bodySearch: "test",
      statisticsVideo: "test",
      currentSearch: "",
      titleChannel:"test"

    };
  }

  getResourse = async (url) => {
    let res = await fetch(url);
    if (!res.ok) {
      console.log('что-то не так с апи')
    }
    let body = await res.json();
    return body;
  }

  searchvideo = async (e) => {
    e.preventDefault();
    let currentSearch1 = e.target.searchInput.value;
    this.getResourse(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${e.target.searchInput.value}&type=video&key=${Api2_key}`)
      .then((body) => {
        this.setState(({ id, bodySearch, currentSearch }) => {
          currentSearch = currentSearch1;
          bodySearch = body;
          id = `${urlYoutube}${body.items[0].id.videoId}`
          return {
            id, bodySearch, currentSearch
          }
        })
      }).then(this.test10)
  }

  showTitle = async (id = this.state.id.slice(24)) => {
    this.getResourse(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${Api2_key}`)
      .then((body) => {
        this.setState(({ title ,titleChannel}) => {
          return {
            title: body.items[0].snippet.localized.title,
            titleChannel: body.items[0].snippet.channelTitle
          }
        })
      })
  }

  onListPlay = (event) => {
    if (event.target.getAttribute('name') !== undefined) {
      let idName = event.target.getAttribute('name');
      this.test10(idName);
      this.setState(({ id }) => {
        id = `${urlYoutube}${idName}`
        return {
          id
        }
      })
    }
    else { alert("попробуйте еще раз") }
  }

  comment = (id = this.state.id.slice(24)) => {
    this.getResourse(`https://www.googleapis.com/youtube/v3/commentThreads?part=id%2Csnippet&videoId=${id}&key=${Api2_key}`)
      .then((body) => {
        this.setState(({ comments }) => {
          comments = body;
          return {
            comments
          }
        })
      })
  }

  showInfoVideo = async (id = this.state.id.slice(24)) => {
    this.getResourse(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=${Api2_key}`)
      .then((body) => {
        this.setState(({ statisticsVideo }) => {
          return {
            statisticsVideo: body.items[0].statistics
          }
        })
      })
  }

  test10 = (id) => {
    this.showTitle(id);
    this.comment(id);
    this.showInfoVideo(id)
  }

  onNextVideo = () => {
    this.getResourse(`https://www.googleapis.com/youtube/v3/search?pageToken=${this.state.bodySearch.nextPageToken}&part=snippet&maxResults=6&q=${this.state.currentSearch}&type=video&key=${Api2_key}`)
      .then((body) => {
        this.setState(({ bodySearch }) => {
          return {
            bodySearch: body
          }
        })
      })
  }

  onPrevVideo = () => {
    if (this.state.bodySearch.prevPageToken === "CAEQAQ" || this.state.bodySearch.prevPageToken === undefined || this.state.bodySearch.prevPageToken.length === 0) {
      alert('не работает')
    }
    else {
      this.getResourse(`https://www.googleapis.com/youtube/v3/search?pageToken=${this.state.bodySearch.prevPageToken}&part=snippet&maxResults=6&q=${this.state.currentSearch}&type=video&key=${Api2_key}`)
        .then((body) => {
          this.setState(({ bodySearch }) => {
            return {
              bodySearch: body
            }
          })
        })
    }
  }

  onNextComments = () => {
    this.getResourse(`https://www.googleapis.com/youtube/v3/commentThreads?pageToken=${this.state.comments.nextPageToken}&part=id%2Csnippet&videoId=${this.state.id.slice(24)}&key=${Api2_key}`)
      .then((body) => {
        this.setState(({ comments }) => {
          return {
            comments: body
          }
        })
      })
  }

  render() {
    return (
      <div className="App">
        <div className="top">
          <Search
            searchvideo={this.searchvideo} />
          <div className="content">
            <div className="row">
              <div className="video col-lg-8">
                <Video
                titleChannel = {this.state.titleChannel}
                  statisticsVideo={this.state.statisticsVideo}
                  title={this.state.title}
                  idVideo={this.state.id}
                  bodySearch={this.state.bodySearch} />
                <div className="comments">
                  <Comments
                    OnNextComments={this.onNextComments}
                    commentsData={this.state.comments}
                    idVideo={this.state.id} />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="videoside">
                  <Videoside
                    idVideo={this.state.id}
                    OnPrevVideo={this.onPrevVideo}
                    OnNextVideo={this.onNextVideo}
                    onListPlay={this.onListPlay}
                    getResourse={this.getResourse}
                    urlYoutube={this.state.urlYoutube}
                    bodySearch={this.state.bodySearch} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
