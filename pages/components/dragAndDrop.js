import React, {useState} from 'react';

export default function DragAndDrop(){
    const[gameList,setGameList] = useState([
    {id:1,order:1,name:"none",text:"none"},
    {id:2,order:2,name:"aboutme",text:"aboutme"},
    {id:3,order:3,name:"hobby",text:"hobby"},
    {id:4,order:4,name:"favorite",text:"favorite"},
    ]);

    const [currentGame,setCurrentGame] = useState(null)

    function dragStart(e,game){
        console.log("drag",game)
        setCurrentGame(game)
    }

    function dragLeave(e){
        e.target.style.background = "white"
    }

    function dragEnd(e){
        e.target.style.background = "white"
    }

    function dragOver(e){
        e.preventDefault()
        e.target.style.background = "lightgray"
    }

    function Drop(e,game){
        e.preventDefault()
        setGameList(gameList.map(g => {
            if (g.id === game.id){
                return {...g, order: currentGame.order}
            }
            if (g.id === currentGame.id){
                return {...g, order: game.order}
            }
            return g
        }))
        e.target.style.background = "white"
    }

    const sortGames = (a,b) => {
        if(a.order > b.order){
            return 1
        } else {
            return -1
        }
    }

    return(
        <div className="app">
        {gameList.sort(sortGames).map(game =>
            <div 
                onDragStart={(e) => dragStart(e,game)}
                onDragLeave={(e) => dragLeave(e)}
                onDragEnd={(e) => dragEnd(e)}
                onDragOver={(e) => dragOver(e)}
                onDrop={(e) => Drop(e,game)}
                className="game" 
                draggable="true" 
            >
                {game.text}
                {/* 上のtextを画像URLに変える  */}
            </div>
            )}
        </div>
    )
}