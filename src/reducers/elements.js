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
                type:'h1',
                text:'Heading 1 from REDUX',
            }
        ],
        sort:0
    }
]

export default (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}