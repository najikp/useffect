import React,{useState,useEffect} from 'react'

function Counter() {
    const [count,setCount]=useState(0)
    const [count1,setCount1]=useState(0)

    useEffect(()=>{
        console.log('Mounting...');
        console.log('count',count)
        console.log('Count.....1',count1)

        return()=>{
            console.log('Clean up',count)
        }
    },[count,count1])
  return (
    <div>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <h1>Counting:{count}</h1>
        <button onClick={()=>{setCount1(count1+1)}}>Increment</button>
        <h1>Counting  1:{count1}</h1>        
    </div>
  )
}

export default Counter