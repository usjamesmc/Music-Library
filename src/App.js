import React, { useState } from 'react';
import AddSongForm from './components/AddSong/AddSongForm'


function App() {
  const [entries, setEntries] = useState([{title: 'horizons', artist: 'parkway drive', album: 'dont know', genre: 'heavy metal', releaseDate: '2012-05-22'}, {title: 'carrion', artist: 'parkway drive', album: 'dont know', genre: 'heavy metal', releaseDate: '2012-05-22'}])
  function addNewEntry(entry){
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }
  return (
    <div className='contained-fluid'>
      <div className='row'>
         
          <div className='border-box'>
            <AddSongForm addNewEntry={addNewEntry} />
          </div>
          
      </div>
    </div>
  );
}

export default App;
