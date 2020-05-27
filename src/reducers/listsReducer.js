const initialState = [
    {
        title:"SOMETHING",
        id:0,
        cards:[
            {
                id:0,
                text:"lest make this APP!!!"
            },
            {
                id:1,
                text:"and then go to drink tea"
            }
        ]
    },
    {
        title:"SOMETHING #2",
        id:1,
        cards:[
            {
                id:0,
                text:"lest make this APP!!!"
            },
            {
                id:1,
                text:"and then go to drink tea"
            },
            {
                id:2,
                text:"and make some app again"
            }
        ]
    }
]

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default listsReducer;