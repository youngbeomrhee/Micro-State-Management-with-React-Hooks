import { useState } from 'react'

// 컴포넌트 내부에서 지역 상태를 관리하는 예제
export const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            {count}
            <button onClick={() => setCount((c) => c + 1)}>+1</button>
        </div>
    )
}
