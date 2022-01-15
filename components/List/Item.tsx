import React, {useState} from 'react';
export default function Item (prop:  {val: string}) {
  console.log("RENDER Item")
  const [input, setInput] = useState<string>(prop.val);
  const onChange = function(e: React.ChangeEvent<HTMLInputElement>){
    setInput(e.target.value);
  }
  return (
    <li>
      <input type="text" onChange={onChange}/>
      <span>{input}</span>
    </li>
  )
}