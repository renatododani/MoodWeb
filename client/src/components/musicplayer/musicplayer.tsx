export function MusicPlayer() {
    return (
        <div> 
        <body>
    <h1>Music Player</h1>

    <div className="music-container" id="music-container">
      <div className="music-info">
        <h4 id="title"></h4>
        <div className="progress-container" id="progress-container">
          <div className="progress" id="progress"></div>
        </div>
      </div>

      <audio src="music/ukulele.mp3" id="audio"></audio>

      <div className="img-container">
        <img src="images/ukulele.jpg" alt="music-cover" id="cover" />
      </div>
      <div className="navigation">
        <button id="prev" className="action-btn">
          <i className="fas fa-backward"></i>
        </button>
        <button id="play" className="action-btn action-btn-big">
          <i className="fas fa-play"></i>
        </button>
        <button id="next" className="action-btn">
          <i className="fas fa-forward"></i>
        </button>
      </div>
    </div>

    <script src="script.js"></script>
  </body>
        </div>
    )
}