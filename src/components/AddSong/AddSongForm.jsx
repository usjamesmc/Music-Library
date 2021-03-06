import React, { useState } from 'react';
import './AddSongForm.css'

const PostForm = (props) => {
    
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    
    function handleSubmit(event){
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            genre: genre,
            releaseDate: releaseDate
        };
        console.log(newSong);
        props.addNewSong(newSong)
    }
    return(
        <div className='border-box'>
            <form onSubmit={handleSubmit}>   
                <label>Title</label>
                <input type='text' onChange={(event) => setTitle(event.target.value)}/>
                <label>Artist</label>
                <input type='text' onChange={(event) => setArtist(event.target.value)}/>
                <label>Album</label>
                <input type='text' onChange={(event) => setAlbum(event.target.value)}/>
                <label>Genre</label>
                <input type='text' onChange={(event) => setGenre(event.target.value)}/>
                <label>Release Date</label>
                <input type='text' onChange={(event) => setReleaseDate(event.target.value)}/>
                <button type='submit'>Add Song</button>
            </form>
        </div>
    );
}
    export default PostForm; 