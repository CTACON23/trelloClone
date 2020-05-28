import React from "react";
import Card from "@material-ui/core/Card";
import {Draggable} from "react-beautiful-dnd";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import s from "./TrelloCard.module.css"

const TrelloCard = ({text,id,index}) =>{
    return(
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Card className={s.cardContainer}>
                        <CardContent>
                            <Typography>{text}</Typography>
                        </CardContent>
                    </Card>
                </div>
            )}
        </Draggable>
    )
}
export default TrelloCard;