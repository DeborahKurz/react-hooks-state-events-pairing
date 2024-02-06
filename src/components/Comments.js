import React, {useState} from 'react';
import Tile from "./Tile.js";

function Comments(){
    const [areCommentsVisible, setAreCommentsVisible] = useState(true);

    function handleHide(){
        setAreCommentsVisible(!areCommentsVisible);
    }

    return(
        <div>
            <div>
                <button onClick={handleHide}>{areCommentsVisible ? "Hide Comments" : "Show Comments"}</button>
            </div>
            <div>
                <h2>{areCommentsVisible ? "2 Comments" : null}</h2>
            </div>
            <div>
                {areCommentsVisible ? <Tile /> : null}
            </div>
        </div>
    )
}

export default Comments;