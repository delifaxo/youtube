import React, { Component } from 'react';
//import logo from './logo.svg';
import './test.css';
import './bs.css';
import Search from './components/search/search';
import Video from './components/video/video';
import Videoside from './components/video-side/video-side';
import Comments from './components/comments/comments';




const Api2_key = "AIzaSyBe9qwivOtTfitthysxQY7gqYIp1BDCiuc";
const urlYoutube ="//www.youtube.com/embed/";



class App extends Component {
  constructor() {
    super();
    this.state = {
      //   videoMain:    <iframe width="480" height="270" src="//www.youtube.com/embed/9bZkp7q19f0"  ></iframe>,
   //   id: "//www.youtube.com/embed/9bZkp7q19f0",
    id : "test",
      title: "",
      comments: [],
      bodySearch: "test"
    };
  
  }

 getResourse = async (url) => {
    let res = await fetch(url);
    if (!res.ok) {
   console.log("что-то не так с апи")
    }
    let body = await res.json();
    return body;
}
  searchvideo = async (e) => {
    e.preventDefault();
   // this.getResourse(`https://www.googleapis.com/youtube/v3/search?part=id&q=${e.target.searchInput.value}&type=video&key=${Api2_key}`).then((body)=>{
      this.getResourse(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${e.target.searchInput.value}&type=video&key=${Api2_key}`).then((body)=>{
 
      this.setState(({ id , bodySearch}) => {
        bodySearch = body;
        id = `${urlYoutube}${body.items[0].id.videoId}`
          return { id,bodySearch
        }
        
      })
    }).then(this.test10)
    }


showTitle = async (id=this.state.id.slice(24)) => {
  this.getResourse(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${Api2_key}`)
  .then((body)=>{
    console.log("Test"+body)
    this.setState(({ title}) => {
        return {
        title: body.items[0].snippet.localized.title,
    
        }
      })
    })
}

onListPlay =  (event) => {
 // console.log(event.target.name)  console.log(event.target.getAttribute('name'));
  if (event.target.getAttribute('name') != undefined) {
  let idName = event.target.getAttribute('name');
  this.test10(idName);
  this.setState(({ id}) => {
    id = `${urlYoutube}${idName}`
   
      return { id
    }
  })
}
else{alert("попробуйте еще раз")}
}
  comment = (id=this.state.id.slice(24)) => {
    this.getResourse(`https://www.googleapis.com/youtube/v3/commentThreads?part=id%2Csnippet&videoId=${id}&key=${Api2_key}`)
    .then((body)=>{
      this.setState(({ comments }) => {
      //  comments = `${body.items[0].id.videoId}`
comments = body;
//comments = body.items[0].snippet.topLevelComment.snippet.textDisplay
          return { comments
        }
      })
    })
    }
      test10 =  (id) => {
        this.showTitle(id);
        this.comment(id);
      }
  render() {
    return (
      <div className="App">
     
        <Search
          searchvideo={this.searchvideo}
        />
     <div className="videosidebar">
          < Videoside 

          idVideo = {this.state.id}// -< пробная



          onListPlay ={this.onListPlay}
          getResourse ={this.getResourse}
          urlYoutube = {this.state.urlYoutube}
          bodySearch = {this.state.bodySearch}
          />
          </div>
               <div className="container-main">
          <div className="cont3 card border-primary mb-3">
        
            <Video
           title = {this.state.title}
              idVideo={this.state.id}
              bodySearch = {this.state.bodySearch}
            />

        
            <Comments
            commentsData = {this.state.comments}
            idVideo = {this.state.id}
            />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
