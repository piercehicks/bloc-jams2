import React,{ Component } from 'react';
import albumData from './../data/albums';
import { Link } from 'react-router-dom';
/* import '../styles/main.css'; */
 import '../styles/collection.css';

class Library extends Component { 
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }
  render() {
   return ( 
     <section /*className='library'*/ className="album-covers container">
       
       {
          this.state.albums.map( (album, index) => 
            <Link to={`/album/${album.slug}`} key={index}>
             <div className="collection-album-container">
              <img className="album-covers" src={album.albumCover} alt={album.title} />
               <div>{album.title}</div>
               <div>{album.artist}</div>
               <div>{album.songs.length} songs</div>
               </div>
            </Link>
          )
        }
        
     </section>
    );
  }
}



export default Library;