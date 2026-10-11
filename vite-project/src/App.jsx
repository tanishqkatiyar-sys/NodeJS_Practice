
import { useState } from 'react';

function App() {
  const [val, setVal] = useState('');

  return (
    <>
      <input
        type="text" value={val}
        onChange={(event) => {
          setVal(event.target.value);
        }}
        placeholder="Enter your name"
      />

      <br />

      {val ? <h1>Welcome {val}</h1> : ""}
      <br></br>
      <button onClick={()=>{setVal('')}}>Clear</button>
    </>
  );
}

export default App;
