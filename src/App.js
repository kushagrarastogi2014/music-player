import React, { useEffect, useRef, useState } from "react";
import "./styles/app.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import ChillHop from "./data";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  // Ref
  const audioRef = useRef(null);
  // Handlers
  const timeUpdateHandler = (e) => {
    const { currentTime, duration } = e.target;
    // Calculate Percentage
    const animationPercentage = Math.round((currentTime / duration) * 100);

    setSongInfo({
      ...setSongInfo,
      currentTime,
      duration,
      animationPercentage,
    });
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };

  // State
  const [songs, setSongs] = useState(ChillHop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [loopOption, setLoopOption] = useState("repeat-all");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) setTheme(currentTheme);
  }, []);

  return (
    <div className={`App ${theme} ${libraryStatus ? "library-active" : ""}`}>
      <Nav
        theme={theme}
        setTheme={setTheme}
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
      <Song currentSong={currentSong} />
      <Player
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        loopOption={loopOption}
        setLoopOption={setLoopOption}
      />

      <Library
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        libraryStatus={libraryStatus}
      />

      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        onEnded={songEndHandler}
        ref={audioRef}
        src={currentSong.audio}
        loop={loopOption === "repeat-one"}
      ></audio>
    </div>
  );
}

export default App;
