import React from 'react'

type childrenType = {
    children: React.ReactNode
}
const Card = (props: childrenType) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Card
