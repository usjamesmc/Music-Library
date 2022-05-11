import React, { useState } from 'react';

const SearchForm = (props) => {
    
    const [songs, setSongs] = useState('');
    
    function handleSubmit(event){
        event.preventDefault();
        let newSongs = {
            songs: songs
           
        };
        console.log(newSongs);
        props.getAllSongs(newSongs)
    }
    return(
        <div className='border-box'>
            <form onSubmit={handleSubmit}>   
                <input type='text' onChange={(event) => setSongs(event.target.value)}/>
                <button type='submit'>Filter By:</button>
            </form>
        </div>
    );

}
    export default SearchForm; 