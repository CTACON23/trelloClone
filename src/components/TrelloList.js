import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import s from './TrelloList.module.css'

const TrelloList = ({title,cards}) =>{
    return(
        <div className={s.trellolist}>
            <h3>{title}</h3>
            {
                cards.map(card=>(
                    <TrelloCard key={card.id} text={card.text}/>
                    ))
            }
            <TrelloActionButton card/>
        </div>
    )
}

export default TrelloList;