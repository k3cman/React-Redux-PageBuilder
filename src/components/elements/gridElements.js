import React, {Fragment} from 'react'

export const Wrapper = props => {
    return <div id="wrapper">{props.children}</div>
}

export const Container = props => {
    return <div className="container">{props.children}</div>
}

export const OneColumn = props => {
    return <div className="fourteen columns">{props.children}</div>
}

export const HalfColumn = props => {
    return <div className="seven columns">{props.children}</div>
}