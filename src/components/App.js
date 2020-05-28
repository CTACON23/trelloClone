import React, {Component} from 'react';
import TrelloList from "./TrelloList";
import {connect} from "react-redux"
import s from "./App.module.css"
import TrelloActionButton from "./TrelloActionButton";
import {DragDropContext,Droppable} from "react-beautiful-dnd";
import {sort} from "../actions";


class App extends Component{
   onDragEnd =(result)=>{
       const {dispatch} = this.props;
        const {destination,source,draggableId,type} = result;

        if(!destination){
            return;
        }

        this.props.dispatch(
            sort(
                source.droppableId,
                destination.droppableId,
                source.index,
                destination.index,
                draggableId,
                type
            )
        );

   };

  render(){
    const {lists} = this.props;
    return (
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className={s.app}>
              <Droppable droppableId="all-lists" direction="horizontal" type="list">
                  {provided=>(
                    <div {...provided.droppableProps} ref={provided.innerRef} className={s.listsContainer}>
                      {lists.map((list,index) => (
                          <TrelloList
                              listID={list.id}
                              key={list.id}
                              title={list.title}
                              cards={list.cards}
                              index={index}
                          />
                      ))}
                        {provided.placeholder}
                      <TrelloActionButton list/>
                    </div>
                  )}
              </Droppable>
          </div>
        </DragDropContext>
    )
  }
}

const mapStateToProps = state =>({
  lists: state.lists
})

export default connect(mapStateToProps) (App);
