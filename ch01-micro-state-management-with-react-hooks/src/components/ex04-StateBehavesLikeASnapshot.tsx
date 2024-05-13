import { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>{count}</p>
            <button
                onClick={() => {
                    setCount(count + 1)
                    setCount(count + 1)
                    setCount(count + 1)
                }}
            >
                setCount(count + 1) three times
            </button>
            <button
                onClick={() => {
                    setCount((c) => c + 1)
                    setCount((c) => c + 1)
                    setCount((c) => c + 1)
                }}
            >
                setCount((c) =&gt; c + 1) three times
            </button>
        </div>
    )
}
