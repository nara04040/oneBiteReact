import React,{useState} from "react"
import OddEvenResult from "./OddEvenResult";

const Counter = ({initailValue}) => {
    // 0에서 출발 1씩 증가하고 1씩 감소하는 count 상태
    const [count, setCount] = useState(initailValue)
    
    const onIncrease = () => {
        setCount(count + 1)
    } 
    
    const onDecrease = () => {
        setCount(count - 1)
    }


    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <OddEvenResult count={count} />
        </div>
    )
};
Counter.defaultProps = {
    initailValue: 0
}
export default Counter