import { useReducer, useState } from 'react'

type CounterState = { count: number }
const init = (count: number) => ({ count })
const reducer = (prev: CounterState, delta: number): CounterState => ({
    ...prev,
    count: prev.count + delta,
})

// useReducer를 사용한 useState와 useState를 사용한 useReducer 비교
// useReducer를 사용한 useState는 reducer과 같이 구현에 필요한 로직을 훅이나 컴포넌트 외부에서 정의할 수 있다
export const ComponentWithUseReducer = ({
    initialCount,
}: {
    initialCount: number
}) => {
    const [state, dispatch] = useReducer(reducer, initialCount, init)
    return (
        <div>
            {state.count}
            <button onClick={() => dispatch(1)}>+1</button>
        </div>
    )
}

// 반면에 useState를 사용한 useReducer는 구현에 필요한 로직을 완전히 분리할 수 없다
export const ComponentWithUseState = ({
    initialCount,
}: {
    initialCount: number
}) => {
    const [state, setState] = useState(() => init(initialCount))
    const dispatch = (delta: number) =>
        setState((prev: CounterState) => reducer(prev, delta))

    return (
        <div>
            {state.count}
            <button onClick={() => dispatch(1)}>+1</button>
        </div>
    )
}
