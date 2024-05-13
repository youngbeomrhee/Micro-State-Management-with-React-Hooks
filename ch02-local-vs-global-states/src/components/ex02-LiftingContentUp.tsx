import React from 'react'

const AdditionalInfo = () => {
    return <p>Some information</p>
}

const Component1: React.FC<{
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>
}> = ({ count, setCount }) => {
    return (
        <div>
            <h3>Component1</h3>
            <p>count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>Increase</button>
            <AdditionalInfo />
        </div>
    )
}

// count가 변경되면 Parent가 리렌더링된 후 Component1과 Component2, AdditionalInfo도 리렌더링된다.
// AdditionalInfo는 count에 의존하지 않기 때문에 리렌더링할 필요가 없다.
const Parent = () => {
    const [count, setCount] = React.useState(0)

    return (
        <>
            <Component1 count={count} setCount={setCount} />
            <Component1 count={count} setCount={setCount} />
        </>
    )
}

const Component2: React.FC<{
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>
    addionalInfo?: React.ReactNode
}> = ({ count, setCount, addionalInfo }) => {
    return (
        <div>
            <h3>Component2</h3>
            <p>count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>Increase</button>
            {addionalInfo}
        </div>
    )
}

const Parent2 = ({ additionalInfo }: { additionalInfo: React.ReactNode }) => {
    const [count, setCount] = React.useState(0)

    return (
        <>
            <Component2
                count={count}
                setCount={setCount}
                addionalInfo={additionalInfo}
            />
            <Component2 count={count} setCount={setCount} />
        </>
    )
}

const GrandParent2 = () => {
    return <Parent2 additionalInfo={<AdditionalInfo />} />
}

// childred props 사용
const Component3: React.FC<{
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>
    children?: React.ReactNode
}> = ({ count, setCount, children }) => {
    return (
        <div>
            <h3>Component3</h3>
            <p>count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>Increase</button>
            {children}
        </div>
    )
}

const Parent3 = ({ children }: { children: React.ReactNode }) => {
    const [count, setCount] = React.useState(0)

    return (
        <>
            <Component3 count={count} setCount={setCount}>
                {children}
            </Component3>
            <Component3 count={count} setCount={setCount} />
        </>
    )
}

const GrandParent3 = () => {
    return (
        <Parent3>
            <AdditionalInfo />
        </Parent3>
    )
}

export const LiftingContentUp = () => {
    return (
        <>
            <h1>Lifting Content Up</h1>
            <p style={{ outline: '1px solid black' }}>
                <h3>초기 구현</h3>
                <Parent />
            </p>
            <p style={{ outline: '1px solid black' }}>
                <h3>내용 끌어올리기</h3>
                <GrandParent2 />
            </p>
            <p style={{ outline: '1px solid black' }}>
                <h3>children props 사용</h3>
                <GrandParent3 />
            </p>
        </>
    )
}
