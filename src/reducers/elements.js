

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
            },
            
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
        ],
        sort:2
    },
    {
        col:'col-4',
        children:[
           {
               col:'sixteen',
               type:'p',
               text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, repellendus impedit voluptatum consequatur aspernatur quae sint totam soluta labore libero quam iusto! Asperiores aspernatur explicabo quos perferendis dolorum, dicta ea.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, repellendus impedit voluptatum consequatur aspernatur quae sint totam soluta labore libero quam iusto! Asperiores aspernatur explicabo quos perferendis dolorum, dicta ea.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, repellendus impedit voluptatum consequatur aspernatur quae sint totam soluta labore libero quam iusto! Asperiores aspernatur explicabo quos perferendis dolorum, dicta ea.'
           }
        ],
        sort:2
    }
]

export default (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}