import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  audioRef,
  songs,
  setSongs,
  setCurrentSong,
  isPlaying,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className='library-songs'>
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            audioRef={audioRef}
            song={song}
            setCurrentSong={setCurrentSong}
            songs={songs}
            setSongs={setSongs}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
