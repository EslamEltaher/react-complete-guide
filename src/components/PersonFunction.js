import React from 'react'

export default function Person(props) {
    return (
        <div>
            <h1>my name is {props.name}, and I'm {props.age} years old!</h1>
            <p onClick={props.click}>from person function</p>
            <p>{props.children}</p>
        </div>
    )
}
