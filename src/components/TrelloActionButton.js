import React,{useState} from "react";
import Icon from "@material-ui/core/Icon";
import s from "./TrelloActionButton.module.css"


class TrelloActionButton extends React.Component{
    state={
        formOpen:true
    }

     openForm = () =>{
        this.setState({
            formOpen:!this.state.formOpen
        })
    };
     renderAddButton = () =>{
        const {list} = this.props;
        const buttonText = list ? "Add another list" : "Add another card";
        return(
            <div onClick={this.openForm}
                className={list ? s.actionButton_list+' '+s.actionButton : s.actionButton_card+' '+s.actionButton}>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    };
     renderForm = () =>{
        return null
    };
    render(){
        return(
            this.state.formOpen ? this.renderAddButton : this.renderForm
        )
    }

}

export default TrelloActionButton;