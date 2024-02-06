import React from 'react';

function Tile(){
    const commentArray = [
        {key: 1, name: "duanebot", comment: "first"}, 
        {key: 2, name: "gaeron", comment: "What a great tutorial!"}
    ];
    
    return commentArray.map((userComment)=>{
        return(
            <div key={userComment.key}>
                <h3>{userComment.name}</h3>
                <h5>{userComment.comment}</h5>
            </div>
        )
    })
}

export default Tile;