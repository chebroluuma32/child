import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {
    return (
        <div>
            <h1>Parent is a functional Component</h1>
            <Child1 name="Umach"/>
            <Child2 name="Bhanuch"/>


        </div>
    )
}

export default Parent
