import React, { Component } from 'react';
 
 class PlayerBar extends Component {
   render() {
     return (
       <section className="player-bar">
         <section id="buttons">
           <button id="previous" onClick={this.props.handlePrevClick} className="album-song-button">
             <span className="ion-skip-backward"><ion-icon name="play-skip-back"></ion-icon></span>
           </button>
           <button id="play-pause" onClick={this.props.handleSongClick} >
           <span className="ion-play"><ion-icon name="play"></ion-icon></span>
             <span className="ion-pause"><ion-icon name="pause"></ion-icon></span>
             <span className={this.props.isPlaying ? <ion-icon name="pause"></ion-icon> : <ion-icon name="play"></ion-icon> }></span>
           </button>
           <button id="next" onClick={this.props.handleNextClick} className="album-song-button">
             <span className="ion-skip-forward"><ion-icon name="play-skip-forward"></ion-icon></span>
           </button>
         </section>
         <section id="time-control">
         <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
            <input 
                type="range" 
                className="seek-bar" 
                value={(this.props.currentTime / this.props.duration) || 0} 
                max="1" 
                min="0" 
                step="0.01" 
                onChange={this.props.handleTimeChange}
            />   
            <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
         </section>
         <section id="volume-control">
           <div className="icon ion-volume-low"><ion-icon name="volume-off"></ion-icon></div>
            <input
            type="range"
            className="seek-bar"
            value={this.props.volume}
            max='1'
            min='0'
            step='0.01'
            onChange={this.props.handleVolumeChange}
            />
           <div className="icon ion-volume-high"><ion-icon name="volume-high"></ion-icon></div>
         </section>
       </section>
     );
   }
 }
 
 export default PlayerBar;