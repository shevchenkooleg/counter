
export enum ACTION_TYPE {
    COUNTER_INC_VALUE = 'COUNTER_INC_VALUE',
    COUNTER_RESET_VALUE = 'COUNTER_RESET_VALUE',
    COUNTER_SET_START_VALUE = 'COUNTER_SET_START_VALUE',
    COUNTER_SET_STOP_VALUE = 'COUNTER_SET_STOP_VALUE',
    COUNTER_SET_STEP_VALUE = 'COUNTER_SET_STEP_VALUE',
    COUNTER_SET_ERROR = 'COUNTER_SET_ERROR',
    COUNTER_DISPLAY_TOOLS = 'COUNTER_SHOW_TOOLS',
    COUNTER_RENDER_TOOLS_BAR = 'COUNTER_RENDER_TOOLS_BAR',
}


const initialState = {
    startValue: 0,
    stopValue: 5,
    stepValue: 1,
    counter: 0,
    toolsRender: false,
    display: false,
    error: false,
}

type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: CounterReducerType) => {
    switch (action.type) {
        case ACTION_TYPE.COUNTER_INC_VALUE:
            return {...state, counter: action.counter}
        case ACTION_TYPE.COUNTER_RESET_VALUE:
            return {...state, counter: action.counter}
        case ACTION_TYPE.COUNTER_SET_START_VALUE:
            return {...state, startValue: action.startValue}
        case ACTION_TYPE.COUNTER_SET_STOP_VALUE:
            return {...state, stopValue: action.stopValue}
        case ACTION_TYPE.COUNTER_SET_STEP_VALUE:
            return {...state, stepValue: action.stepValue}
        case ACTION_TYPE.COUNTER_RENDER_TOOLS_BAR:
            return {...state, toolsRender: action.render}
        case ACTION_TYPE.COUNTER_DISPLAY_TOOLS:
            return {...state, display: action.display}
        default:
            return state
    }

}

type CounterReducerType = IncCounterACType | ResetCounterACType | setStartValueACType |
    setStopValueACType | setStepValueACType | setToolsRenderACType | setDisplayACType

export type IncCounterACType = ReturnType<typeof incCounter>
export const incCounter = (counter: number, stepValue: number) => {
    return {
        type: ACTION_TYPE.COUNTER_INC_VALUE,
        counter: counter + stepValue
    } as const
}

export type ResetCounterACType = ReturnType<typeof resetCounter>
export const resetCounter = (startValue: number) => {
    return {
        type: ACTION_TYPE.COUNTER_RESET_VALUE,
        counter: startValue
    } as const
}

export type setStartValueACType = ReturnType<typeof setStartValue>
export const setStartValue = (newValue: number) => {
    return {
        type: ACTION_TYPE.COUNTER_SET_START_VALUE,
        startValue: newValue
    } as const
}

export type setStopValueACType = ReturnType<typeof setStopValue>
export const setStopValue = (newValue: number) => {
    return {
        type: ACTION_TYPE.COUNTER_SET_STOP_VALUE,
        stopValue: newValue
    } as const
}

export type setStepValueACType = ReturnType<typeof setStepValue>
export const setStepValue = (newValue: number) => {
    return {
        type: ACTION_TYPE.COUNTER_SET_STEP_VALUE,
        stepValue: newValue
    } as const
}

type setToolsRenderACType = ReturnType<typeof setToolsRender>
export const setToolsRender = (render: boolean) => {
    return {
        type: ACTION_TYPE.COUNTER_RENDER_TOOLS_BAR,
        render
    } as const
}

type setDisplayACType = ReturnType<typeof setDisplay>
export const setDisplay = (display: boolean) => {
    return {
        type: ACTION_TYPE.COUNTER_DISPLAY_TOOLS,
        display
    } as const
}

