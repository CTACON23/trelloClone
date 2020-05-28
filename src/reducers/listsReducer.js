import {CONSTANTS} from "../actions";
import {droppable} from "react-beautiful-dnd/src/view/data-attributes";

let listID = 3;
let cardID =8;
const initialState = [
    {
        title:"Список дел",
        id:`list-${0}`,
        cards:[
            {
                id:`card-${0}`,
                text:"lest make this APP!!!"
            },
            {
                id:`card-${1}`,
                text:"and then go to drink tea"
            }
        ]
    },
    {
        title:"В процессе",
        id:`list-${1}`,
        cards:[
            {
                id:`card-${2}`,
                text:"lest make this APP!!!"
            },
            {
                id:`card-${3}`,
                text:"and then go to drink tea"
            },
            {
                id:`card-${4}`,
                text:"and make some app again"
            }
        ]
    },
    {
        title:"Готово",
        id:`list-${2}`,
        cards:[
            {
                id:`card-${5}`,
                text:"lest make this APP!!!"
            },
            {
                id:`card-${6}`,
                text:"and then go to drink tea"
            },
            {
                id:`card-${7}`,
                text:"and make some app again"
            }
        ]
    }
]

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title:action.payload,
                cards:[],
                id:`list-${listID}`
            }
            listID++;
            return [
                ...state,newList
            ]
        case CONSTANTS.ADD_CARD: {
            const newCard = {
                text: action.payload.text,
                id: `card-${cardID}`
            };
            cardID++;
            const newState = state.map(list => {
                if(list.id === action.payload.listID){
                    return{
                        ...list,
                        cards: [...list.cards,newCard]
                    };
                }else{
                    return list;
                }
            });
            return newState;
        }
        case CONSTANTS.DRAG_HAPPENED:
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId,
                type
            } = action.payload;
                const newState = [...state];
            if(type === 'list'){
                const list = newState.splice(droppableIndexStart,1);
                newState.splice(droppableIndexEnd,0,...list);
                return newState;
            }
                //in the same list
            if(droppableIdStart === droppableIdEnd){
                const list = state.find(list => droppableIdStart === list.id);
                const card =list.cards.splice(droppableIndexStart,1);
                list.cards.splice(droppableIndexEnd,0, ...card);
            }
            //other list
            if(droppableIdStart !== droppableIdEnd){
                //drag happend on
                const listStart = state.find(list=>droppableIdStart === list.id);

                const card= listStart.cards.splice(droppableIndexStart,1);

                //find list to drop
                const listEnd = state.find(list=>droppableIdEnd === list.id);

                //drop card
                listEnd.cards.splice(droppableIndexEnd,0,...card)

            }
            return newState;
        default:
            return state;
    }
}

export default listsReducer;