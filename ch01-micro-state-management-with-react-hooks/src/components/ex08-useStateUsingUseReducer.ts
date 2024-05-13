import { useReducer, Dispatch } from 'react'

// useReducer를 이용한 useState 구현
export function useState1<S>(initialState: S): [S, Dispatch<S>] {
    // 리듀서 함수는 현재 상태와 액션을 받아 새 상태를 반환
    // useReducer를 호출하여 상태와 디스패치 함수를 반환
    const [state, dispatch] = useReducer(
        (prev: S, action: S): S =>
            typeof action === 'function' ? action(prev) : action,
        initialState
    )

    // 반환된 상태와 디스패치 함수
    return [state, dispatch]
}

export const useState2 = <S>(initialState: S) =>
    useReducer(
        (prev: S, action: S): S =>
            typeof action === 'function' ? action(prev) : action,
        initialState
    )
