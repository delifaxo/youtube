import React, { Component } from 'react'

function RenderPlayer(bodyId) {
  if (bodyId.bodyId === "test") {
    return <div>Начните поиск</div>;
  }
  else {
    return (
      <div>
        <iframe className="ytplayer" allowFullScreen="allowfullScreen"
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
  var { statisticsVideo } = statisticsVideo
  if (statisticsVideo === "test") {
    return <div></div>
  }
  else {
    return (
      <div>
        лайков -  {`${statisticsVideo.likeCount.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1.')}
       дизлайков - ${statisticsVideo.dislikeCount.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1.')}`}<br></br>
        {`просмотров - ${(statisticsVideo.viewCount.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1.'))}`}
      </div>
    );
  }
}

function RenderChannelTitle(titleChannel) {
  var { titleChannel } = titleChannel
  if (titleChannel === "test") {
    return <div></div>
  }
  else {
    return (
      <div>
        {`Название канала - ${titleChannel}`}
      </div>
    );
  }
}
function RenderTitle(title) {
  var { title } = title
  if (title === "") {
    return <div></div>
  }
  else {
    return (
      <div>
        {`Название видео - ${title}`}
      </div>
    );
  }
}
export default class video extends Component {
  render() {
    const { title, idVideo, statisticsVideo,titleChannel } = this.props;
    return (
      <div className="player">
        <RenderTitle title={title} />
        <RenderPlayer bodyId={idVideo} />
        <RenderChannelTitle titleChannel={titleChannel} />
        <RenderStatisticsVideo statisticsVideo={statisticsVideo} />
      </div>
    )
  }
}
