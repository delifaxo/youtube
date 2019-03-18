import React, { Component } from 'react'

export default class Videosidelist extends Component {
  
  render()  {
    const {bodySearch,onListPlay,idVideo} = this.props;
    const { items} = bodySearch;
    // title: body.items[0].snippet.localized.title,

if (bodySearch === "test") {
  return (
    <div className="comments">
    Начните поиск видео
    </div>
  )
}
else {
  return(

    <div >  
    {items.map(( { id,snippet } )  => { if(id.videoId === idVideo.slice(24) ) { } else { return( <div onClick={onListPlay} name = {`${id.videoId}`} key={`${id.videoId}`}className="alert text-white bg-primary mb-3">
  <img name = {`${id.videoId}`}   src = {`https://i.ytimg.com/vi/${id.videoId}/default.jpg`}></img>
    <div className="video-side-text" name = {`${id.videoId}`} >  {snippet.title}</div>
    </div>  ) } } ) } 
  </div>
 
  )
}
} 
}
//snippet.thumbnails.default.url -> для картинок в map -> "url": "https://i.ytimg.com/vi/UgZ4Uxo-T4I/default.jpg",
 
/*
 {items.map(( { id:{ videoId } } ) => <div key={`${videoId}`}className="card text-white bg-primary mb-3">
       <img name = {`${videoId}`}   src = {`https://i.ytimg.com/vi/${videoId}/default.jpg`}></img> </div>)} 
       */


       /* привильный вариант 
         <div >
       {items.map(( { id,snippet } ) =>  <div onClick={onListPlay} name = {`${id.videoId}`} key={`${id.videoId}`}className="alert text-white bg-primary mb-3">
     <img name = {`${id.videoId}`}   src = {`https://i.ytimg.com/vi/${id.videoId}/default.jpg`}></img>
       <div className="video-side-text" name = {`${id.videoId}`} >  {snippet.title}</div>
       </div>)} 
       */
      /* Убираем 1 елемент поиска
      
      <div >
       {items.map(( { id,snippet } )  => { if(id.videoId === bodySearch.items[0].id.videoId ) { } else { return( <div onClick={onListPlay} name = {`${id.videoId}`} key={`${id.videoId}`}className="alert text-white bg-primary mb-3">
     <img name = {`${id.videoId}`}   src = {`https://i.ytimg.com/vi/${id.videoId}/default.jpg`}></img>
       <div className="video-side-text" name = {`${id.videoId}`} >  {snippet.title}</div>
       </div>  ) } } ) } 
       */