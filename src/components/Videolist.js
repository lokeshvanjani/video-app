import React from 'react';
import Videoitem from './Videoitem';

const Videolist = props => {
    const total = props.listofvideos.map((singlevideo) => {
       return (<Videoitem 
                    key={singlevideo.id.videoId} 
                    singlevideo={singlevideo}
                    onvideoselect={props.onvideoselect}
                />) 
    });

    return <div className="ui list">{total}</div>;
}

export default Videolist;