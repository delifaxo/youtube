import React, { Component } from 'react'
export default class Comments extends Component {

  showAllComments = () => {
  }
  render() {
    const { commentsData } = this.props;
    if (commentsData.length === 0 || commentsData.items === undefined) {
      return (
        <div className="comments">
        Комментарии не доступны
        </div>
      )
    }
     else  {
      const { items } = commentsData;
     //   const { snippet: { topLevelComment: { snippet: { textDisplay } } } } = items[i]
        return (
          <div className="comments">
         <div>
    </div>
    {items.map(( { snippet: { topLevelComment: { snippet: { authorDisplayName,textOriginal } } } , snippet}) => 
     <div key = {snippet.topLevelComment.etag} className="card text-white bg-warning mb-3">
     
     <div    >Автор  {authorDisplayName} комментарий {textOriginal}</div></div>)}
           
          </div>
        )
      }
    }
  }

