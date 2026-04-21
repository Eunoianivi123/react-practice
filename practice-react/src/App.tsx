import { useState } from 'react';

function MyButton({ count, onClick}) {
    return (
        <button onClick = {onClick}>Clicked {count} times</button>
    )
}

export default function App() {
  const [count, setCount] = useState(0);
    function handleClick(){
        setCount(count + 1);
    }
  return (
    <div>
      <h1>Hello to Hooks!</h1>
      {/* these are called props(passing value from parent to child component) */}
      <MyButton count = {count} onClick = {handleClick}/>
      <MyButton count = {count} onClick = {handleClick}/>
    </div>
  )
}