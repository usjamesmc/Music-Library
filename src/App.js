import React, { useState, useEffect } from 'react';
import AddSongForm from './components/AddSong/AddSongForm'
import DisplayMusic from './components/DisplayMusic/DisplayMusic'
import NavBar from './components/NavBar/NavBar'
import SearchBar from './components/SearchBar/SearchBar'
import axios from 'axios'

function App() {
  const [songs, setSongs] = useState([{title: 'horizons', artist: 'parkway drive', album: 'dont know', genre: 'heavy metal', releaseDate: '2012-05-22'}, {title: 'carrion', artist: 'parkway drive', album: 'dont know', genre: 'heavy metal', releaseDate: '2012-05-22'}])
  
  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/')
    setSongs(response.data);
    
  }
     
  return (   
    <div className='contained-fluid'>
      <div className='row'>
          <div className='border-box'>
            <NavBar parentSongs={songs} />
          </div>
          <div className='border-box'>
            <SearchBar parentSongs={songs} />
          </div>
          <div className='border-box'>
            <DisplayMusic parentSongs={songs} />
          </div>
          <div className='border-box'>
            <label>Add a Song</label>
          </div>
          <div className='border-box'>
            <AddSongForm addNewSong={songs} />
          </div>
      </div>
    </div>
  );
}
export default App;
