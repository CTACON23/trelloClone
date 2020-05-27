import React, {Component} from 'react';
import TrelloList from "./TrelloList";
import {connect} from "react-redux"
import s from "./App.module.css"
class App extends Component{

  render(){
    const {lists} = this.props;
    return (
      <div className={s.App}>
        <div className={s.listsContainer}>
          {lists.map(list => (
              <TrelloList key={list.id} title={list.title} cards={list.cards}/>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state =>({
  lists: state.lists
})

export default connect(mapStateToProps) (App);
