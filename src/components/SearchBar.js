import React, { useState } from 'react';

const SearchBar = ({onpressingenter}) => {
    const [searchtext, setsearchtext] = useState('');
    
    const myformSubmit = (event) => {
        event.preventDefault();
        onpressingenter(searchtext);
    }

    return(
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={myformSubmit}>
                <div className="field">
                    <label>Video Search </label>
                    <input type="text" placeholder="Search here" 
                        value={searchtext}
                        onChange={(event) => setsearchtext(event.target.value)}>
                    </input>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;