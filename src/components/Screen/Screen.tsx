import React from 'react'

type ScreenPropsType = {
    counter: number
}

const Screen: React.FC<ScreenPropsType> = (
    {counter}
) => {
    return (
        <div>{counter}</div>
    )
}

export default Screen