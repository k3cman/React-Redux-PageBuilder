import React from 'react'

export const Wrapper = props => {
    return <div id="wrapper" style={{paddingBottom:'50px'}}>{props.children}</div>
}

export const Column = props => {
    return <div className={`${props.col} columns`}>{props.children}</div>
}

export const Container = props => {
    return <div className="container">{props.children}</div>
}