import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import {Draggable, Droppable} from "react-beautiful-dnd";
import s from './TrelloList.module.css'
import {dragHandle} from "react-beautiful-dnd/src/view/data-attributes";

const TrelloList = ({title,cards,listID,index}) =>{
    return(
        <Draggable draggableId={String(listID)} index={index}>
            {provided=>(
                <div {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                    <Droppable droppableId={String(listID)} type="card">
                        {provided => (
                            <div {...provided.droppableProps}  ref={provided.innerRef} className={s.trellolist}>
                                <h3>{title}</h3>
                                {
                                    cards.map((card,index)=>(
                                        <TrelloCard
                                            key={card.id}
                                            index={index}
                                            text={card.text}
                                            id={card.id}
                                            />
                                        ))
                                }
                                {provided.placeholder}
                                <TrelloActionButton listID={listID}/>

                            </div>
                        )}
                    </Droppable>
                </div>
            )}
        </Draggable>

    )
}

export default TrelloList;