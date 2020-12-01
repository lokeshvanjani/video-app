import React from 'react';
import '../css/videoitem.css';

const Videoitem = (props) => {
    return(
        <div className="video-item item" 
            onClick={() => {props.onvideoselect(props.singlevideo)}}
        >
            <img className="ui image" alt={props.singlevideo.snippet.channelTitle}
                src={props.singlevideo.snippet.thumbnails.medium.url}/>
            <div className="content">
                <div className="header">
                    {props.singlevideo.snippet.title}
                </div>
            </div>
        </div>
    );
}

export default Videoitem;