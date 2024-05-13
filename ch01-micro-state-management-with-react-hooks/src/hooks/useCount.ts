import { Dispatch, SetStateAction, useEffect, useState } from 'react'

// 사용자 정의 훅을 만들어서 상태를 분리
export const useCount = (): [number, Dispatch<SetStateAction<number>>] => {
    const [count, setCount] = useState(0)
    // 카운트가 임의의 숫자로 변경되는 것을 허용하지 않고 1씩 증가시키는 등의 규칙 추가도 가능하다
    const inc = () => setCount((c) => c + 1)

    // 상태가 분리됐기 때문에 상태를 사용하는 컴포넌트를 수정하지 않고 기능을 추가할 수 있다
    useEffect(() => {
        console.log(`count is changed to ${count}`)
    }, [count])

    // return [count, setCount]
    return [count, inc]
}
