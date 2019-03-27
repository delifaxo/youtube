import React, { Component } from 'react'

export default class Comments extends Component {

  showAllComments = () => {
  }
  render() {
    const { commentsData, OnNextComments } = this.props;
    if (commentsData.length === 0 || commentsData.items === undefined) {
      return (
        <div className="notcomments">
          Комментарии не доступны
        </div>
      )
    }
    else {
      const { items } = commentsData;
      return (
        <div>
          <div>
          </div>
          {items.map(({ snippet: { topLevelComment: { snippet: { authorDisplayName, textOriginal } } }, snippet }) =>
            <div key={snippet.topLevelComment.etag} className="comments-item-list text-comments card bg-light mb-3">
              <div>Автор {authorDisplayName} комментарий {textOriginal}
              </div></div>
          )}
          <div className="comments-item-list text-comments card bg-light mb-3">
            <button className="btn" onClick={OnNextComments}>Next Comments</button>
          </div>
        </div>
      )
    }
  }
}