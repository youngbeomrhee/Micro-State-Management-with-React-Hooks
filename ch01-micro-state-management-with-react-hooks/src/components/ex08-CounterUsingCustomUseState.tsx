import { useState1, useState2 } from './ex08-useStateUsingUseReducer'

// 컴포넌트 내부에서 지역 상태를 관리하는 예제
export const Counter = () => {
    const [count1, setCount1] = useState1(0)
    const [count2, setCount2] = useState2(0)

    return (
        <div>
            <div>
                {count1}
                <button onClick={() => setCount1((c) => c + 1)}>+1</button>
            </div>
            <div>
                {count2}
                <button onClick={() => setCount2((c) => c + 1)}>+1</button>
            </div>
        </div>
    )
}
