import { Fragment } from "react";
import { useState } from "react";

const UseStateQue3=()=>{
    const [counter,setCounter]=useState(0);

    const incClickHandler=()=>{
        setCounter(counter+1);
    }
    const decClickHandler=()=>{
        setCounter(counter-1);
    }
    return(
        <Fragment>
            <h1>{counter}</h1>
            <button onClick={incClickHandler}> Icrease</button>
            <button onClick={decClickHandler}> Decrease</button>

        </Fragment>
    )
}

export default UseStateQue3;