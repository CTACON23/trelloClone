import React from "react";
import {Icon,TextareaAutosize,Card,CardContent,Button} from "@material-ui/core";
import {connect} from 'react-redux';
import {addCard, addList} from "../actions";
import s from "./TrelloActionButton.module.css"
import {DragDropContext} from "react-beautiful-dnd";


class TrelloActionButton extends React.Component{
    state={
        formOpen:true,
        text: ''
    }

     toggleForm = () =>{
        this.setState({
            formOpen:!this.state.formOpen
        })
    };
    handleInputChange = e =>{
        this.setState({
            text: e.target.value
        })
    };
    handleAddList = () =>{
      const {dispatch} = this.props;
      const {text} = this.state;

      if(text){
          dispatch(addList(text))
      };
      return;
    };
    handleAddCard = () =>{
        const {dispatch,listID} = this.props;
        const {text} = this.state;
        if(text){
            dispatch(addCard(listID,text))
        };
        return;
    }
     renderAddButton = () =>{
        const {list} = this.props;
        const buttonText = list ? "Add another list" : "Add another card";
        return(
            <div onClick={this.toggleForm}
                className={list ? s.actionButton_list+' '+s.actionButton : s.actionButton_card+' '+s.actionButton}>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    };
     renderForm = () =>{
         const {list} = this.props;
         const placeholder = list ? "Enter list title..." : "Enter a title for this card...";
         const buttonTitle = list ? "Add List" : "Add Card";

        return (
            <div>
                <Card className={s.actionForm}>
                    <CardContent>
                        <TextareaAutosize
                            autoFocus
                            onBlur={this.toggleForm}
                            placeholder={placeholder}
                            onChange={this.handleInputChange}
                            value={this.state.text}
                        />
                    </CardContent>
                </Card>
                <div className={s.actionForm_button}>
                    <Button onMouseDown={list ? this.handleAddList : this.handleAddCard}>{buttonTitle}{""}</Button>
                    <Icon onClick={this.toggleForm} className={s.actionForm_button__close}>close</Icon>
                </div>
            </div>
        );
    };
    render(){
        return(
            this.state.formOpen ? this.renderAddButton() : this.renderForm()
        )
    }

}

export default connect()(TrelloActionButton);