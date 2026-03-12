import type React from "react"

type childrenType={
    children:React.ReactNode
}

const Button = (props:childrenType) => {
    return (
        <button>
            {props.children}
        </button>
    )
}

export default Button
