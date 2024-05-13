import { useState } from 'react'

export const Counter = () => {
    const [state, setState] = useState({ count: 0 })
    console.log('리랜더링됨', Date.now())
    return (
        <div>
            <p>{state.count}</p>
            {/* 프로퍼티는 count: 1로 같지만 (주소가) 다른 객체이므로 얕은 비교로 인해 매번 리랜더링 */}
            <button onClick={() => setState({ count: 1 })}>
                case1: Set Count to 1
            </button>
            {/* bailout 되어 리랜더링이 아예 발생하지 않는 잘못된 코드 */}
            <button
                onClick={() => {
                    state.count = 1
                    setState(state)
                }}
            >
                case2: Set Count to 1
            </button>
            <button
                onClick={() => {
                    state.count = 1
                    setState(state)
                }}
            >
                case2: Set Count to 1
            </button>
        </div>
    )
}
