import { useState } from "react";

function App(){
  // const [fruit,setFruit]=useState("Apple")
  // const handleFruit=()=>{
  //   fruit=="Apple"?setFruit('Banana'):setFruit('Apple')
  // }
  const [display,setDisplay]=useState(false)
  return (
    <>
    {
      display?<h1>Tanishq</h1>:null
    }
    <button onClick={()=>{setDisplay(!display)}}>Click</button>
    </>
  )
}

export default App;