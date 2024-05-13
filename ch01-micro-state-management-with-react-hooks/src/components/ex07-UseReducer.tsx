import { useEffect, useReducer } from 'react'

type CounterState = { count: number; text?: string }
type CounterAction = { type: string; text?: string }

function reducer(state: CounterState, action: CounterAction): CounterState {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 }
        case 'SET_TEXT':
            // 베일아웃 (입력값이 없을 때는 상태를 변경하지 않아서 리랜더링을 발생시키지 않음)
            if (!action.text) {
                return state
            }
            return { ...state, text: action.text }
        default:
            throw new Error('Unhandled action type')
    }
}

const init = () => {
    setTimeout(() => {
        console.log(
            '1. 무거운 계산이 포함된 시간이 오래 걸리는 초기화 로직 실행완료'
        )
    }, 3000)
    return { count: 0, text: 'hi2' }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(
        reducer,
        { count: 0, text: 'hi' },
        init
    )

    useEffect(() => {
        setTimeout(() => {
            console.log(
                '2. 상태변화에 필요한 무거운 계산이 포함된 시간이 오래 걸리는 로직 실행완료'
            )
            dispatch({ type: 'SET_TEXT', text: 'hi3' })
        }, 5000)
    }, [])

    return (
        <div>
            <p>
                {state.count}&nbsp;
                <button
                    onClick={() =>
                        dispatch({ type: 'INCREMENT', text: 'increment' })
                    }
                >
                    Increment count
                </button>
            </p>
            <p>
                {state.text}&nbsp;
                <input
                    onChange={(e) =>
                        dispatch({ type: 'SET_TEXT', text: e.target.value })
                    }
                />
            </p>
        </div>
    )
}
