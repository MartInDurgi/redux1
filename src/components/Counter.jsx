import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
/* import { decrement, increment } from './counterSlice'
*/import { selectCounterValue } from "../store/counter/selectors";
import { decrement, decrementByValue, increment,resetValue } from "../store/counter/slice";



const Counter = ()=>{
const [decrementAmount, setDecrementAmount] = useState('2');

const counterValue = useSelector(selectCounterValue)

const dispatch = useDispatch();




const IncrementCounter = ()=> {
dispatch(increment())

/* setCounterValue(counterValue+1)
*/}
const DecrementCounter = ()=> {
dispatch(decrement())

/* setCounterValue(counterValue-1)
*/}

const ResetCounter = () => {
dispatch(resetValue())
}


return (
<div>

    <button type="button" onClick={IncrementCounter}>Increment</button>
    <p>{counterValue}</p>
    <button type="button" onClick={DecrementCounter}>Decrement</button>

    <div>
        <input aria-label="Set decrement amount" value={decrementAmount} onChange={e=>
        setDecrementAmount(e.target.value)}
        />
        {console.log(decrementAmount)}
        <button onClick={()=>
            dispatch(decrementByValue(Number(decrementAmount) || 10))
            }
            >
            Amount
        </button><br></br>
        <button type="button" onClick={ResetCounter}>Reset Counter</button>

    </div>

</div>


);

}
export default Counter;
