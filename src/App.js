import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import Tracklist from './Tracklist';
import Track from './Track';

function App() {
  return (
    <>
      <div id='searchContainer'>
        <div>
          <SearchBar />
        </div>
        <div>
          <SearchResults />
        </div>
      </div>
      <div id='playlistContainer'>
        <Playlist />
      </div>
      <div id='TracklistContainer'>
        <Tracklist />
      </div>
      <div id='currentTrack'>
        <Track />
      </div>
    </>


  );
}

export default App;
