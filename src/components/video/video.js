import React, { Component } from 'react'
//import TestApi from '../.././api/test'


function RenderPlayer(bodyId) {
  console.log(bodyId)
  if (bodyId.bodyId === "test") {
    return <div>Начните поиск</div>;
  }
else {
  console.log("1",bodyId.bodyId)
  return (
    <div className="divVideo">
    <iframe width="640" height="360" allowFullScreen="allowfullScreen"
      mozallowfullscreen="mozallowfullscreen"
      msallowfullscreen="msallowfullscreen"
      oallowfullscreen="oallowfullscreen"
      webkitallowfullscreen="webkitallowfullscreen" src ={`${bodyId.bodyId}` }   > 
      </iframe>
  </div>
// //www.youtube.com/embed/${bodySearch.items[0].id.videoId}
  );
}
}
export default class video extends Component {

  
  render() {
    const {  title ,idVideo , bodySearch} = this.props;

    return (
      <div className="video">
        {title} 
   <RenderPlayer bodyId={idVideo}/>      </div>
    )
  }
}
