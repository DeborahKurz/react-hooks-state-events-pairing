import React, {useState} from "react";

function Likes(){
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    function handleLikes(){
        setLikes(likes+1);
    };

    function handleDislikes(){
        setDislikes(dislikes-1);
    };

    return(
        <div>
            <span>
                <button value={likes} onClick={handleLikes}>{likes} 👍</button>
                <button value={dislikes} onClick={handleDislikes}>{dislikes} 👎</button>
            </span>
        </div>
    )
};

export default Likes;