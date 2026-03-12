import React from 'react'

type btnStyleProps = {
    style: React.CSSProperties
}

const ButtonStyle = (props: btnStyleProps) => {
    return (
        <button style={props.style}>
            click me
        </button>
    )
}

export default ButtonStyle
