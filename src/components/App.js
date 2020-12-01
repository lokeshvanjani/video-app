import React, { useState } from 'react';
import SearchBar from './SearchBar';
import YoutubeData from '../apis/YoutubeData';
import Videolist from './Videolist';
import Videodetail from './Videodetail';

const App = () => {
    const [listofvideos, setlistofvideos] = useState([]);
    const [selectedvideo, setselectedvideo] = useState(null);
    
    const onpressingenter = async (searchedbyuser) => {
        const response = await YoutubeData.get("/search",{
            params:{
                q: searchedbyuser
            }
        });
        
        setlistofvideos(response.data.items);
        setselectedvideo(response.data.items[0]);
    }

    return(
        <div className="ui container">
            <SearchBar onpressingenter={onpressingenter}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <Videodetail singlevideo={selectedvideo}/>
                    </div>
                    <div className="five wide column">
                        <Videolist 
                            listofvideos={listofvideos}
                            onvideoselect={(selectedfromlist)=>setselectedvideo(selectedfromlist)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default App;