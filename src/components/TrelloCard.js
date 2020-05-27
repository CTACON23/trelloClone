import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import s from "./TrelloCard.module.css"

const TrelloCard = ({text}) =>{
    return(
        <Card className={s.cardContainer}>
            <CardContent>
                <Typography>{text}</Typography>
            </CardContent>
        </Card>
    )
}
export default TrelloCard;