import React, { useState, useRef } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <button aria-label="Play music" className="music-player-button" onClick={togglePlay}>
      <audio ref={audioRef} src="/3.mp3" loop />
      <div className={`cd-icon-container ${isPlaying ? 'playing' : ''}`}>
        <svg viewBox="0 0 40 40" className="cd-svg" aria-hidden="true">
            <circle cx="20" cy="20" r="19" fill="#1a1a1a"></circle>
            <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"></circle>
            <circle cx="20" cy="20" r="13" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></circle>
            <circle cx="20" cy="20" r="10" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8"></circle>
            <circle cx="20" cy="20" r="6" fill="#C9A0A0"></circle>
            <circle cx="20" cy="20" r="1.5" fill="#1a1a1a"></circle>
            <circle cx="20" cy="5" r="1.5" fill="rgba(255,255,255,0.85)"></circle>
        </svg>
      </div>
    </button>
  );
};

export default MusicPlayer;
