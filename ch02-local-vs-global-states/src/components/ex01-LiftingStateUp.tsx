import { useState } from 'react'

const Component1 = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h3>Component1</h3>
            <p>count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>Increase</button>
        </div>
    )
}

const Component2 = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h3>Component1</h3>
            <p>count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>Increase</button>
        </div>
    )
}

// 지역 상태가 컴포넌트 내로 제한
// 상태를 공유할 수 없다는 단점이 있지만 상태 변화로 인한 리랜더링이 컴포넌트로 한정된다는 장점
export const Container = () => {
    return (
        <div>
            <h1>Container</h1>
            <Component1 />
            <Component2 />
        </div>
    )
}

const Component3: React.FC<{
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>
}> = ({ count, setCount }) => {
    return (
        <div>
            <h3>Component3</h3>
            <p>count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>Increase</button>
        </div>
    )
}

const Component4: React.FC<{
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>
}> = ({ count, setCount }) => {
    return (
        <div>
            <h3>Component4</h3>
            <p>count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>Increase</button>
        </div>
    )
}

// 상태를 부모 컴포넌트로 끌어올리기
// 상태를 공유할 수 있지만 상태 변화로 인한 리랜더링이 자식들까지 전파된다는 단점
const Parent = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Parent</h1>
            <Component3 count={count} setCount={setCount} />
            <Component4 count={count} setCount={setCount} />
        </div>
    )
}

export const LiftingStateUp = () => {
    return (
        <div>
            <h1>Separated State</h1>
            <Container />
            <h1>Lifting State Up</h1>
            <Parent />
        </div>
    )
}
