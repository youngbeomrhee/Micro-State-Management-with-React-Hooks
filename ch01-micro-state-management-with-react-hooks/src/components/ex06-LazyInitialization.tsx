import { useState } from 'react'

const init = () => {
    setTimeout(() => {
        console.log(
            '무거운 계산이 포함된 시간이 오래 걸리는 초기화 로직 실행완료'
        )
    }, 3000)
    return 0
}

export const LazyInitialization = () => {
    const [count, setCount] = useState(init)
    console.log('리랜더링')
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+1</button>
        </div>
    )
}
