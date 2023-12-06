import React from 'react'
import Taskbar from './Taskbar'
import { useState } from 'react'
function Tasks() {

  const [state, setState] = useState("BAD BOI")
  console.log(state)
  function changes() {
    setState("GOOD BOI")
  }


  return (
    <div>
        <Taskbar afunc={changes}/>
        <p>{state}</p>
    </div>
  )
}

export default Tasks