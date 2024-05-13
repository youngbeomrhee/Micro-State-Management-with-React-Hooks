import { useEffect, useState } from 'react'

export const BailoutUsingSetStateFunction = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const id = setInterval(() => setCount((c) => c + 1), 3000)
        return () => clearInterval(id)
    }, [])

    return (
        <div>
            {count}
            <button onClick={() => setCount((c) => (c % 2 === 0 ? c : c + 1))}>
                Increment Count if it makes the result even
            </button>
        </div>
    )
}
