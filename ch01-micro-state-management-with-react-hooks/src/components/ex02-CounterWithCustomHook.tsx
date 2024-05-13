import { useCount } from '../hooks/useCount'

export const Counter = () => {
    const [count, setCount] = useCount()

    return (
        <div>
            {count}
            <button onClick={() => setCount(1)}>+1</button>
        </div>
    )
}
