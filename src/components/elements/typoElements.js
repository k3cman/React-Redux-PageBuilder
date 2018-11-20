import React from 'react';

export const List = props => {
    return (<ul className='list-2'>
    {props.children}
    </ul>);
}

export const ListItem = props => {
    return (
        <li>{props.children}</li>
    )
}