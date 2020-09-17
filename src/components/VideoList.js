import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelectVLPropFromApp }) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        onVideoSelectVLPropFromVL={onVideoSelectVLPropFromApp}
        key={video.id.videoId}
        video={video}
      />
    ); // video = what we got back from youtube api
  });

  return <div className='ui relaxed divided list'>{renderedList}</div>;
};

export default VideoList;
