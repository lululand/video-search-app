import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('puppies');
  }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelectApp = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className='ui container'>
      <div class="ui hidden divider"></div>
        <SearchBar callParentSubmit={this.onTermSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='nine wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='seven wide column'>
              <VideoList
                onVideoSelectVLPropFromApp={this.onVideoSelectApp}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
