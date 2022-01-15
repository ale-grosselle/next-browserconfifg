import React, {useState, useRef, useEffect, MutableRefObject} from "react";
import Item from "./Item";

const getRandom = function () {
  const a = new Date().getMilliseconds();
  console.log("YES CALLME....:(", a);
  return a;
}

export default function List (){
  console.log("RENDER NEW LIST");
  const [inputVal, setInput] = useState<string>();
  const [items, setItems] = useState<Array<React.ReactNode>>([]);
  const mqlRef: MutableRefObject<MediaQueryList | null> = useRef(null);
  const mqlRefCallback = useRef(() => {
    console.log("RENDER RENDER RENDER");
  });

  const refTest =  useRef(getRandom());
  console.log("refTest.current:", refTest.current);
  // @ts-ignore
  if(global.a !== refTest.current) {
    console.log("is DIFFERENT!!!!!!");
    // @ts-ignore
    global.a = refTest.current;
  }

  const onClick = function(e: React.MouseEvent) {
    if(inputVal) {
      items.push(
        <Item key={items.length} val={inputVal}/>
      );
      setItems([...items]);
    }
  }

  useEffect(() => {
    mqlRef.current = window.matchMedia(
      `(max-width: 500px)`
    );
    //Set is Mobile
    mqlRefCallback.current();
    mqlRef.current.addListener(mqlRefCallback.current);
  }, []);

  useEffect(() => {
    return () => {
      if (mqlRef.current && mqlRefCallback.current) {
        console.log("DESTROY LIST");
        mqlRef.current.removeListener(mqlRefCallback.current);
      }
    };
  }, []);

  return (
    <>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={onClick}>Add Item</button>
      <ul>
        {items}
      </ul>
    </>
  )
}