import React from "react";


const callAll = async function () {
  console.log("OK HELLO!");
}

class ThisIsAClass  {
  constructor() {
    console.log("HELLO FROM AN INSTANCE!")
  }
}

const Index = () => {
  React.useEffect(() => {
    callAll();
    new ThisIsAClass();
  }, [])
  return (
    <div>
      Hello
    </div>
  )
}

export default Index

export async function getServerSideProps() {

  await callAll();

  return {
    props: {}, // will be passed to the page component as props
  }
}
