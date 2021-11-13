import React,{useState} from 'react'

function Hook() {

    let [age,setAge]=useState(26)

    return (
        <div>
            <h1 onMouseOver={()=>{setAge(21)}}
            onMouseLeave={()=>{setAge(26)}}>guna age is {age}</h1>            
        </div>
    )
}

export default Hook

