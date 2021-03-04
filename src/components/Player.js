import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
  faRandom,
  faRedo,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  songInfo,
  currentSong,
  setCurrentSong,
  songs,
  setSongs,
  setSongInfo,
  audioRef,
  isPlaying,
  setIsPlaying,
  loopOption,
  setLoopOption,
}) => {
  // Event Handler
  const activeLibraryHandler = (song) => {
    const newSongs = songs.map((s) => {
      if (s.id === song.id) {
        return {
          ...s,
          active: true,
        };
      } else {
        return {
          ...s,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  };

  const playSondHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({
      ...setSongInfo,
      currentTime: e.target.value,
      duration: audioRef.current.duration,
    });
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const skipTrackHandler = async (direction) => {
    if (loopOption === "random") {
      let random = randomNumber(0, songs.length);
      await setCurrentSong(songs[random]);
      activeLibraryHandler(songs[random]);
    } else {
      let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
      if (direction === "skip-forward") {
        await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
      } else if (direction === "skip-back") {
        if ((currentIndex - 1) % songs.length === -1) {
          await setCurrentSong(songs[songs.length - 1]);
          activeLibraryHandler(songs[songs.length - 1]);
        } else {
          await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
          activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
        }
      }
    }
    if (isPlaying) audioRef.current.play();
  };

  const getIcon = () => {
    switch (loopOption) {
      case "repeat-all":
        return faRetweet;
      case "repeat-one":
        return faRedo;
      case "random":
        return faRandom;
      default:
        return;
    }
  };

  const loopHandler = () => {
    switch (loopOption) {
      case "repeat-all":
        setLoopOption("repeat-one");
        break;
      case "repeat-one":
        setLoopOption("random");
        break;
      case "random":
        setLoopOption("repeat-all");
        break;
      default:
        return;
    }
  };

  // Add the Styles
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };
  return (
    <div className='player'>
      <div className='time-control'>
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
          className='track'
        >
          <input
            onChange={dragHandler}
            value={songInfo.currentTime}
            min={0}
            max={songInfo.duration || 0}
            type='range'
          />
          <div style={trackAnim} className='animate-track'></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className='player-control'>
        <FontAwesomeIcon
          onClick={() => loopHandler()}
          size='2x'
          icon={getIcon()}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-back")}
          className='skip-back'
          size='2x'
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSondHandler}
          className='play'
          size='2x'
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
          className='skip-forward'
          size='2x'
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
