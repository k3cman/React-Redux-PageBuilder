const initialState = [
    {
        col:'col-1',
        children:[
            {
                col:'four',
                type:'p',
                text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            },
            {
                col:'four',
                type:'p',
                text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            },{
                col:'four',
                type:'p',
                text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            },
            {
                col:'four',
                type:'p',
                text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            }
        ],
        sort:1
    },
    {
        col:'col-2',
        children:[
            {
                col:'sixteen',
                type:'h3head',
                text:'Heading 3 from REDUX',
            }
        ],
        sort:0
    },
    {
        col:'col-3',
        children:[
            {
                col:'eight',
                type:'image',
                text:'http://www.enmongroup.com/data/Sr/huppe/trans.jpg'
            },
            {
                col:'eight',
                type:'blockquote',
                text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            }
        ]
    }
]

export default (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}