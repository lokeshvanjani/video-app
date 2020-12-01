import React from 'react';
import '../css/videoitem.css';

const Videodetail = (props) => {
    if(!props.singlevideo){
        return <div></div>
    }
    const videosrc = `https://www.youtube.com/embed/${props.singlevideo.id.videoId}`;
    return(
        <div>
            <div className="mycontainer ui embed">
                <iframe className="myiframe" title={props.singlevideo.snippet.title} src={videosrc}/>
            </div>
            <div className="ui segment">
                <h4 className="ui header">
                    {props.singlevideo.snippet.title}
                </h4>
                <div>
                    {props.singlevideo.snippet.description}
                </div>
            </div>
        </div>
    )
}

export default Videodetail;