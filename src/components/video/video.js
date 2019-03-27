import React, { Component } from 'react'

function RenderPlayer(bodyId) {
   if (bodyId.bodyId === "test") {
    return <div>Начните поиск</div>;
  }
  else {
    return (
            <div>
        <iframe className ="ytplayer" allowFullScreen="allowfullScreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen" src={`${bodyId.bodyId}`}   >
        </iframe>
      </div>
    );
  }
}

function RenderStatisticsVideo(statisticsVideo) {
  var {statisticsVideo} = statisticsVideo
  if (statisticsVideo === "test") {
    return <div></div>
  }
  else {
    return (
      <div>
{`лайков - ${statisticsVideo.likeCount.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1.')}
дизлайков - ${statisticsVideo.dislikeCount.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1.')}
просмотров - ${(statisticsVideo.viewCount.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1.'))}`}
      </div>
    );
  }
}

function RenderChannelTitle(bodySearch) {
  var {bodySearch} = bodySearch
  if (bodySearch === "test") {
    return <div></div>
  }
  else {
    return (
      <div>
{`Название канала - ${bodySearch.items[0].snippet.channelTitle}`}
      </div>
    );
  }
}

export default class video extends Component {
  render() {
    const { title, idVideo, statisticsVideo,bodySearch} = this.props;
    return (
      <div  className="player">
        {title}
        <RenderPlayer bodyId={idVideo}/>
        <RenderChannelTitle bodySearch={bodySearch}/>
        <RenderStatisticsVideo statisticsVideo={statisticsVideo}/>
      </div>
    )
  }
}
