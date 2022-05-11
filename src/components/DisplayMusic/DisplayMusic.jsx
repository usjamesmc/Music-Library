const DisplayMusicTable = (props) => {
    
    return(
        <table className='table'>   
            <tbody>
            {props.parentSongs.map((song, index) => {
                return (
                <tr key={index}>
                    <label>Title:</label>
                    <td>{song.title}</td>
                    <label>Artist:</label>
                    <td>{song.artist}</td>
                    <label>Album:</label>
                    <td>{song.album}</td>
                    <label>Genre:</label>
                    <td>{song.genre}</td>
                    <label>Release Date:</label>
                    <td>{song.releaseDate}</td>
                    <button type='submit'>Dislike</button>
                    <button type='submit'>Edit Song</button>
                </tr>
                );
                })}
            </tbody>
        </table>
    );  
}
export default DisplayMusicTable;