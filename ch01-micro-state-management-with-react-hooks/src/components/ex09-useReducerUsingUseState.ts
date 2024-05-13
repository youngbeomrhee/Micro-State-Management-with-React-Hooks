import { useState, Reducer, useCallback } from 'react'

// useReducer를 이용한 useState 구현
export const useReducer1 = <S, A>(reducer: Reducer<S, A>, initialState: S) => {
    const [state, setState] = useState(initialState)
    const dispatch = (action: A) => {
        setState(reducer(state, action))
    }
    return [state, dispatch]
}
// 지연 초기화 구현, useCallback을 사용
export const useReducer2 = <S, A>(
    reducer: Reducer<S, A>,
    initialArg: S,
    init: (initialArg: S) => S
) => {
    const [state, setState] = useState(
        init ? () => init(initialArg) : initialArg
    )
    const dispatch = useCallback(
        (action: A) => {
            setState(reducer(state, action))
        },
        [reducer]
    )
    return [state, dispatch]
}
